import { getRoomDetailById } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoCheckmark, IoPeopleOutline } from "react-icons/io5";
import ReservationForm from "./reservation-form";

const RoomDetail = async ({roomId}: {roomId: string}) => {
    const room = await getRoomDetailById(roomId);
    if (!room) return notFound();

    return (
        <div className="max-ws-screen-xl py-10 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
            <div className="md:col-span-8">
                <Image
                    src={room.image}
                    alt={room.name}
                    width={500}
                    height={350}
                    priority
                    className="w-full rounded-lg mb-8"
                />
                <h1 className="text-4xl font-semibold text-gray-900 mb-8">{room.name}</h1>
                <p className="text-lg text-gray-700">{room.description}</p>
                <h5 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Room Amenities</h5>
                <div className="grid md:grid-cols-3 gap-4">
                    {room.RoomAmenities.map((item) => (
                        <div key={item.id} className="flex gap-1 py-1 items-center">
                            <IoCheckmark className="size-5"/>
                            <span className="text-gray-700">{item.Amenities.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:col-span-4">
                <div className="border-2 border-gray-300 border-dashed px-3 py-5 bg-slate-100 rounded-lg">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex-items-center space-x-2">
                            <IoPeopleOutline className="size-4"/>
                            <span>{room.capacity} Person</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-2xl font-semibold text-gray-900">{formatPrice(room.price)}</span>
                            <span className="text-sm text-gray-500 font-semibold italic"> /Night</span>
                        </div>
                    </div>
                    {/* Reservation Form */}
                    <ReservationForm room={room} />
                </div>
            </div>
        </div>
    )
}

export default RoomDetail;