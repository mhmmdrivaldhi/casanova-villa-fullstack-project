import { LoginGoogleButton } from "@/components/shared/login-button"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Sign In - Casanova Villa",
    description: "Let's get you started for enjoying our services"
}

const SignInPage = () => {
    return (
        <div className="min-h-screen flex py-40">
            <div className="bg-white w-150 p-8 mx-auto rounded-xl p-8 shadow-md">
                <Image src="/images/logo_casanova_villa.png" width={120} height={120} alt="Logo Casanova Villa's" className="mx-auto"/>
                <h1 className="text-2xl font-bold text-yellow-500 text-center uppercase mb-1">
                    Sign In
                </h1>
                <p className="text-center text-gray-600 text-lg font-medium">
                    Let's get you started for enjoying our services
                </p>
                <div className="py-4 text-center">
                    <LoginGoogleButton />
                </div>
            </div>
        </div>
    )
}

export default SignInPage