import {object, string} from "zod";

export const ContactSchema = object({
    name: string().min(6, "Name at least must have 6 characters"),
    email: string().email("Please enter correct your email address"),
    subject: string().min(6, "Subject at least must have 6 characters"),
    message: string().min(6, "Message at least must have 6 characters").max(200, "Message must not exceed 200 characters"),
})