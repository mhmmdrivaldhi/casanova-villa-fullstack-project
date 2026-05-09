import Image from "next/image";
import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
    return (
        <div className="fix top-0 w-full bg-white shadow-sm z-20">
            <div className="max-w-screen-xl mx-auto flex flex-wrap item-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/logo_casanova_villa.png"
                        alt="Logo Casanova Villa"
                        width={80}
                        height={50}
                        priority
                    />
                </Link>
                <Navlink />
            </div>
        </div>
    )
}

export default Navbar;