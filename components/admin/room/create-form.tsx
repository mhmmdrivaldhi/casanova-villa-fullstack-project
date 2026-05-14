import { IoCloudUploadSharp } from "react-icons/io5";

const CreateForm = () => {
    return (
        <form action="">
            <div className="grid md:grid-cols-12 gap-5">
                <div className="col-span-8 bg-white p-4">
                    <div className="mb-4">
                        <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="e.g Summer Luxury Room . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">Message</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea name="description" rows={5} className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Description . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">Message</span>
                        </div>
                    </div>
                    <div className="mb-4 grid md:grid-cols-3">
                        <input type="text" name="amenities" className="w-4 h-4 text-blue-600 bg-gray-100 border border-gray-400 rounded"/>
                        <label className="ms-2 text-sm font-medium text-gray-900 capitalize">Spa</label>
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">Message</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 bg-white p-4">
                    <label htmlFor="input-file" className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-yellow-600 border-dashed cursor-pointer bg-gray-50 relative">
                        <div className="flex flex-col items-center justify-center text-gray-700 pt-5 pb-6 z-10">
                            <div className="flex flex-col items-center justify-center">
                                <IoCloudUploadSharp size={25} className="mb-2 text-yellow-600" />
                                <p className="text-sm font-semibold mb-1">Select image file here</p>
                                <p className="text-xs text-gray-400 italic">
                                    SVG, PNG, JPG, GIF or Others (Max: 4MB)
                                </p>
                            </div>
                        </div>
                        <input type="file" id="input-file" className="hidden" />
                    </label>
                    <div className="mb-4">
                        <input type="text" name="capacity" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="e.g 10 Person . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">Message</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input type="text" name="price" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="e.g Rp. 6.000.000 . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <span className="text-xs text-red-500 italic mb-2">Message</span>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-sm py-3 text-sm font-semibold transition duration-150 ease-in-out">Create Room</button>
                </div>
            </div>
        </form>
    )
}

export default CreateForm;