"use client";

import { SaveRoom } from "@/lib/actions";
import { Amenities } from "@prisma/client";
import { type PutBlobResult } from "@vercel/blob";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState, useTransition, useActionState } from "react";
import { IoCloudUploadSharp, IoTrashOutline } from "react-icons/io5";
import { BarLoader } from "react-spinners";

const CreateForm = ({amenities}: {amenities: Amenities[]}) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const [pending, startTransition] = useTransition();


    const handleUpload = () => {
        if (!inputFileRef.current?.files) return;

        const file = inputFileRef.current.files[0];
        const formData = new FormData();
        formData.set("file", file);

        startTransition(async () => {
            try {
                setMessage("");
                const response = await fetch("/api/upload", {
                    method: "PUT",
                    body: formData,
                });

                const data = await response.json();
                if (response.status !== 200) {
                    setMessage(data.message);
                }    

                const img = data as PutBlobResult
                setImage(img.url);

            } catch (error) {
                console.log(error);
            }
        });
    };

    const deleteImage = (image: string) => {
        startTransition( async () => {
            try {
                await fetch(`/api/upload/?imageUrl=${image}`, {
                    method: "DELETE",
                });
                setImage("");
            } catch(error) {
                console.log(error);
            }
        });
    };

    const [state, formAction, isPending] = useActionState(SaveRoom.bind(null, image), null);

    return (
        <form action={formAction}>
            <div className="grid md:grid-cols-12 gap-5">
                <div className="col-span-8 bg-white p-4">
                    <div className="mb-4">
                        <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="e.g Summer Luxury Room . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">{state?.error?.name}</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea name="description" rows={5} className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Description . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">{state?.error?.description}</span>
                        </div>
                    </div>
                    <div className="mb-4 grid md:grid-cols-3">
                        {amenities.map((item) => (
                            <div className="flex items-center mb-4" key={item.id}>
                                <input type="checkbox" name="amenities" className="w-4 h-4 text-blue-600 bg-gray-100 border border-gray-400 rounded" defaultValue={item.id}/>
                                <label className="ms-2 text-sm font-medium text-gray-900 capitalize">
                                    {item.name}
                                </label>
                            </div>
                        ))}
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">{state?.error?.amenities}</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 bg-white p-4">
                    <label htmlFor="input-file" className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-yellow-600 border-dashed cursor-pointer bg-gray-50 relative overflow-hidden rounded-md">
                        <div className="flex flex-col items-center justify-center text-gray-700 pt-5 pb-6 z-10">
                                {pending ? <BarLoader/> : null}
                                {image ? (
                                    <button type="button" onClick={() => deleteImage(image)} className="flex items-center justify-center bg-transparent rounded-full absolute right-1 top-1 size-10 hover:bg-red-400 text-red-400 font-bold hover:text-white">
                                        <IoTrashOutline size={20}/>
                                    </button>
                                ): (
                                <div className="flex flex-col items-center justify-center">
                                    <IoCloudUploadSharp size={25} className="mb-2 mt-4 text-yellow-600" />
                                    <p className="text-sm font-semibold mb-1">Select image file here</p>
                                    {message ? (
                                        <p className="text-xs text-red-500">{message}</p>
                                    ) : (
                                        <p className="text-xs text-gray-400 italic">
                                            SVG, PNG, JPG, GIF or Others (Max: 4MB)
                                        </p>
                                    )}
                                </div>
                                )}
                        </div>
                        <input
                            type="file"
                            ref={inputFileRef}
                            onChange={handleUpload}
                            id="input-file"
                            className="hidden"
                        />
                        {image && (
                            <Image
                                src={image}
                                alt="New Image"
                                width={640}
                                height={360}
                                className="rounded-md absolute inset-0 w-full h-full object-cover"
                                style={{ height: "auto" }}
                            />
                        )}
                    </label>
                    <div className="mb-4">
                        <input type="text" name="capacity" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="e.g 10 Person . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">{state?.error?.capacity}</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input type="text" name="price" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="e.g Rp. 6.000.000 . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">{state?.error?.price}</span>
                        </div>
                    </div>
                    {/* General Message */}
                    {state?.message ? (
                        <div className="mb-4" aria-live="polite" aria-atomic="true">
                            <span className="text-red-700 text-xs font-semibold italic">
                                {state.message}
                            </span>
                        </div>
                    ): null}
                    <button type="submit" className={clsx(                "w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-sm py-3 text-sm font-semibold transition duration-150 ease-in-out uppercase", {
                        "opacity-50 cursor-progress": isPending,
                    })} disabled={isPending}>
                        {isPending ? "Loading . . ." : "Create Room"}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CreateForm;