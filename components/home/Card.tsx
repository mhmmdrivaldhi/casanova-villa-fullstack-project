import Image from "next/image"
import Link from "next/link"
import { IoPeopleOutline } from "react-icons/io5"

const Card = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl transitions duration-300 hover:shadow-sm">
            <div className="h-[260px] w-auto rounded-sm relative">
                <Image src="/images/about_casanova_villa.jpg" alt="Casanova Villa" height={256} width={384} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-8">
                <h4 className="text-2xl font-medium text-gray-800">
                    <Link href="#" className="hover:text-gray-800 transition-colors duration-300">Luxury Room</Link>
                </h4>
                <h4 className="text-2xl mb-7">
                    <span className="font-semibold text-gray-800">
                        Rp. 6.500.000
                    </span>
                    <span className="text-sm text-gray-800"> /Night</span>
                </h4>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <IoPeopleOutline/>
                        <span>10 Person</span>
                        <Link href="#" className="px-6 py-3 md:px-4 md:py-2 text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-xl font-semibold">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card