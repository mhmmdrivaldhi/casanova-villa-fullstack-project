import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                src="/images/casanova_villa_thumbnail.jpg" 
                alt="Hero Image" 
                layout="fill" 
                className="object-cover object-center w-full h-full" 
                />
                <div className="absolute inset-0 bg-black opacity-50">

                </div>
            </div>
            <div className="relative flex flex-col h-full px-10 py-30 md:p-35">
                <h1 className="text-3xl md:text-7xl font-bold">Discover the art of</h1>
                <h1>
                    <span className="text-4xl md:text-7xl font-bold text-yellow-600">luxury Summer Rooms</span>
                </h1>
                <p className="text-lg md:text-xl mt-5 max-w-3xl leading-relaxed">
                    Surrounded by tropical beauty and luxury comfort, Casanova Villa invites you to slow down and embrace a more beautiful way of living.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 mt-8">
                    <Link href="/room" className="px-8 py-3 bg-yellow-500 rounded-xl text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                        Reserve Your Stay &#8594;
                    </Link>
                    <Link href="/contact" className="bg-white/20 backdrop-blur-xs text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-white/30 transition-colors duration-300">
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;