'use client';
import { ContactMessage } from "@/lib/actions";
import clsx from "clsx";
import { useActionState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(ContactMessage, null);

    return (
        <div className="bg-white/10 p-8 rounded-lg shadow-xl">
            {state?.message ? (
              <div className="p-2 mb-4 text-xs text-green-600 bg-green-100 border-2 border-green-600 rounded-4xl italic" role="alert">
                <div className="font-semibold px-5 flex gap-3">
                    <FaCheckCircle size={16}/>
                    {state?.message}
                </div>
              </div>  
            ) : null}
            <form action={formAction}>
                <div className="grid md:grid-cols-2 mt-6 gap-2">
                    <div>
                        <input type="text" name="name" className="bg-gray-100 p-3 border border-gray-300 rounded-lg w-full font-light" placeholder="Enter your name . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-xs text-red-500 italic mb-2">{state?.error?.name}</p>
                        </div>
                    </div>
                    <div>
                        <input type="email" name="email" className="bg-gray-100 p-3 border border-gray-300 rounded-lg w-full font-light" placeholder="Enter your email address . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-xs text-red-500 italic mb-2">{state?.error?.email}</p>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <input type="text" name="subject" className="bg-gray-100 p-3 border border-gray-300 rounded-lg w-full font-light" placeholder="Enter your subject . . ." />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-xs text-red-500 italic mb-2">{state?.error?.subject}</p>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <textarea name="message" rows={5} placeholder="Enter your messages . . ." className="bg-gray-100 p-3 border border-gray-300 rounded-lg w-full font-light"></textarea>
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-xs text-red-500 italic mb-4">{state?.error?.message}</p>
                        </div>
                    </div>
                </div>
                <button type="submit" className={clsx("text-center py-4 bg-yellow-500 font-semibold text-white rounded-lg w-full hover:bg-yellow-600 transition-colors duration-300", {
                    "opacity-50 cursor-progress animate-pulse": isPending
                })} disabled={isPending}>
                    {isPending ? "Loading . . ." : " Send Message"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm;