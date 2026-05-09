import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="bg-yellow-500">
                <div className="max-w-screen-xl mx-auto w-full px-8 md:px-0 py-10 md:py-16">
                    <div className="grid md:grid-cols-4 gap-10">
                        <div>
                            <Link href="/">
                                <Image src="/images/logo_casanova_villa.png" alt="Casanova Villa Logo" width={120} height={50} className="mb-6 block" />
                            </Link>
                            <p className="text-white">
                                Inspired by the beauty of endless summer, Casanova Villa offers a refined escape where luxury comfort and tropical serenity create memorable moments for every guest.
                            </p>
                        </div>
                        <div className="flex gap-10 mt-10">
                            <div className="flex-1 md:flex-none">
                                <h3 className="text-xl font-semibold text-white mb-8">
                                    Hospitality
                                </h3>
                                <ul className="list-item space-y-5 text-gray-200">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/room">Rooms</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>   
                            </div>
                        </div>
                        <div className="flex gap-10 mt-10">
                            <div className="flex-1 md:flex-none">
                                <h3 className="text-xl font-semibold text-white mb-8">
                                    Legal
                                </h3>
                                <ul className="list-item space-y-5 text-gray-200">
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Cookie Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Accessibility</Link>
                                    </li>
                                </ul>   
                            </div>
                        </div>
                        <div className="mt-10">
                            <h4 className="mb-3 text-xl font-semibold text-white">Newsletter</h4>
                            <p className="text-gray-200">
                                Subscribe to our newsletter to get the latest updates and offers.
                            </p>
                            <form action="" className="mt-5">
                                <div className="mb-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address . . ."
                                    className="bg-gray-800 text-gray-200 placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-3 rounded-md"
                                />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 border-t border-yellow-600 py-8 text-center text-white">
                    <div className="text-lg mb-2 font-semibold">
                        <Link href="#" className="hover:underline">
                            Privacy
                        </Link>
                        <Link href="#" className="px-5 hover:underline">
                            Terms
                        </Link>
                        <Link href="#" className="hover:underline">
                            Cookies
                        </Link>
                    </div>
                    <div className="font-bold text-lg">
                        &copy; Copyright {new Date().getFullYear()} Casanova Villa's - All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;