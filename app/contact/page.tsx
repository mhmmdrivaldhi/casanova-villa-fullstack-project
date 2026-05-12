import ContactForm from "@/components/shared/contact-form"
import HeaderSection from "@/components/shared/header-section"
import { Metadata } from "next"
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: "Contact Casanova Villa"
} 
const ContactPage = () => {
    return (
        <div>
            <HeaderSection title="Connect With Casanova Villa" subtitle="We are here to make your experience smooth and enjoyable, from reservation inquiries to personalized assistance for your luxury villa stay."/>
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h1 className="text-sm font-semibold text-gray-700 mb-1 uppercase">Get In Touch</h1>
                        <h1 className="text-3xl font-bold text-yellow-500 max-w-screen-sm">Let's Plan Your Holiday</h1>
                        <h1 className="text-3xl font-bold text-yellow-500 mb-2 max-w-screen-sm">With Casanova Villa</h1>
                        <p className="text-gray-800">
                            Discover a luxury tropical retreat designed for comfort, relaxation, and timeless moments surrounded by warm summer ambience.
                        </p>
                        <ul className="list-item space-y-4 pt-4">
                            <li className="flex gap-3 text-gray-600">
                                <div className="flex-none bg-gray-200 p-2 shadow-lg border border-gray-300 rounded-md">
                                <IoMailOutline size={18}/>
                                </div>
                                <div className="flex-1 mt-1">
                                    <p>contact-us@casanova.com</p>
                                </div>
                            </li>
                            <li className="flex gap-3 text-gray-600">
                                <div className="flex-none bg-gray-200 p-2 shadow-lg border border-gray-300 rounded-md">
                                <IoCallOutline size={18}/>
                                </div>
                                <div className="flex-1 mt-1">
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </li>
                            <li className="flex gap-3 text-gray-600">
                                <div className="flex-none bg-gray-200 p-2 shadow-lg border border-gray-300 rounded-md">
                                <IoLocationOutline size={18}/>
                                </div>
                                <div className="flex-1 mt-1">
                                    <p>123 Fashion Street, Style City, SC 12345</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;