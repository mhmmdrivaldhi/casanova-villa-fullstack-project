import { signIn } from "@/auth";
import { FaG } from "react-icons/fa6"

export const LoginGoogleButton = ({ redirectUrl }: { redirectUrl: string }) => {
    return (
        <form action={async () =>  {
            "use server";
            await signIn("google", {
                redirectTo: redirectUrl
            });
        }}>    
            <button className="flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition duration-400 py-3 px-6 text-base rounded-lg cursor-pointer">
                <FaG size={16}/>
                Sign In With Google Account
            </button>
        </form>
    )
}