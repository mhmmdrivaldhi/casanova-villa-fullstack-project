import {array, coerce, object, string} from "zod";

export const ContactSchema = object({
    name: string().min(6, "Name at least must have 6 characters"),
    email: string().email("Please enter correct your email address"),
    subject: string().min(6, "Subject at least must have 6 characters"),
    message: string().min(6, "Message at least must have 6 characters").max(200, "Message must not exceed 200 characters"),
})

export const RoomSchema = object({
    name: string().min(1, "Name at least must have 1 character"),
    description: string().min(50, "Description at least must have 50 characters"),
    capacity: coerce.number().gt(0, "Capacity must be a positive number"),
    price: coerce.number().gt(0, "Price must be a positive number"),
    amenities: array(string()).nonempty("Please select at least one amenity"),
})