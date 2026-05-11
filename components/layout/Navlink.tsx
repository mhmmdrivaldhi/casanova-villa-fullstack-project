'use client'

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";


const Navlink = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <>
            {
                session?.user ? (
                    <div className="flex items-center justify-end md:order-2">
                        <div className="hidden text-sm bg-gray-50 border rounded-full md:me-0 md:block focus:ring-10">
                            <Image src={session.user.image || "/images/avatar.svg" } alt={session.user.name || "No Profile Yet"} width={38} height={38} className="rounded-full"/>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => signOut()} className="md:block hidden py-2 px-4 rounded-lg bg-gray-50 text-black hover:text-red-600 hover:underline transition-colors duration-100 cursor-pointer">
                                Sign Out
                            </button>
                        </div>
                    </div>
                ):null
            }

            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-3 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100">
                {
                    isOpen ? <IoMenu className="size-8" /> : <IoClose className="size-8" />
                }
            </button>
            <div className={clsx("w-full md:block md:w-auto", {"hidden": !isOpen})}>
                <ul className="flex flex-col font-semibold uppercase p-5 mt-5 mb-13 rounded-sm bg-gray-50 md:flex-row md:item-center md:space-x-10 md:mb-0 md:mt-2 md:border-0 md:bg-white">
                    <li>
                        <Link href="/" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/room" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                            Rooms
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                            Contact
                        </Link>
                    </li>
                    {session && (
                        <>
                        <li>
                            <Link href="/my-reservation" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                                My Reservation
                            </Link>
                        </li>
                        {session.user.role === "admin" && (
                            <>    
                            <li>
                                <Link href="/admin/dashboard" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/room" className="block p-5 text-gray-800 hover:bg-yellow-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-yellow-600">
                                    Manage Room
                                </Link>
                            </li>
                            </>
                        )}
                        </>
                    )}
                    {session ? (
                        <li className="pt-3 md:pt-0 px-4">
                            <button onClick={() => signOut()} className="md:hidden py-2.5 px-4 text-white rounded-lg bg-red-500 text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer uppercase">
                                Sign Out
                            </button>
                        </li>
                    ) : (
                        <li className="pt-3 md:pt-0 px-4">
                            <Link href="/signin" className="py-2.5 px-6 text-white rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300">
                                Sign In
                            </Link>
                        </li>
                    )}
                </ul>   
            </div>
        </>
    )
}

export default Navlink;