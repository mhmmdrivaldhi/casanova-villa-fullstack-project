import HeaderSection from "@/components/shared/header-section";
import { Metadata } from "next";
import Image from "next/image";
import { IoBriefcase, IoFileTrayFull } from "react-icons/io5";

export const metadata: Metadata = {
    title: "About Casanova Villa",
    description: "The Casanova Villa Story",
}

const AboutPage = () => {
    return (
        <div>
            <HeaderSection title="The Casanova Villa Story" subtitle="Discover a place where modern luxury, tropical beauty, and peaceful summer living come together to create unforgettable moments and a truly relaxing escape." />
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/images/about_casanova_villa.jpg" alt="About Page Image" width={650} height={579} className="rounded-2xl"/>
                    <div className="">
                        <h1 className="text-4xl font-semibold text-yellow-500 mb-2 uppercase">Who We Are ?</h1>
                        <p className="text-gray-600 text-xl">
                            Inspired by the beauty of endless summer, Casanova Villa offers a refined escape where luxury comfort and tropical serenity create memorable moments for every guest.
                        </p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoFileTrayFull size={31}/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="mt-2 font-bold text-lg">Our Vission</h4>
                                    <p className="text-gray-500 mt-4">Casanova Villa was created as a place where modern architecture, natural beauty, and luxury living blend together to offer a truly relaxing and exclusive escape.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoBriefcase size={30} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="mt-2 font-bold text-xl">Our Mission</h4>
                                    <p className="text-gray-500 mt-4">To provide exceptional hospitality through elegant spaces, personalized service, and a relaxing atmosphere inspired by modern tropical living.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;