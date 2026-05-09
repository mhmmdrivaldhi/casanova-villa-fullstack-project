import Image from "next/image";

const HeaderSection = ({title, subtitle}: {
    title: string,
    subtitle: string
}) => {
    return (
        <header className="relative h-60 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/images/casanova_villa_thumbnail.jpg" alt="Header Images" fill className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center h-60 text-center">
                <h1 className="text-2xl md:text-5xl font-bold leading-tight capitalize">
                    {title}
                </h1>
                <p className="text-md md:text-xl text-yellow-500 max-w-2xl px-5 md:px-0">
                    {subtitle}
                </p>
            </div>
        </header>
    )
}

export default HeaderSection;