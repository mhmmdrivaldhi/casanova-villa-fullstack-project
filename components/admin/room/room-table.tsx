import Image from "next/image";
import { getRooms } from "@/lib/data";
import { formatDate, formatPrice } from "@/lib/utils";
import { DeleteButton, UpdateButton } from "@/components/shared/button";

const RoomTable = async () => {
    const rooms = await getRooms();
    if (!rooms?.length) return "No Rooms Available";

    return (
        <div className="bg-white shadow-lg p-4 mt-5">
            <table className="w-full divide-y divide-gray-300">
                <thead className="text-center">
                    <tr>
                        <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase">Image</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Room Name</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Price</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Created at</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 text-center">
                    {rooms.map((room) => (
                        <tr key={room.id} className="hover:bg-gray-300">
                            <td className="px-6 py-4">
                                <div className="h-20 w-32 relative">
                                <Image src={room.image} alt="Room Image" fill sizes="18vw" className="rounded-sm object-cover" />
                                </div>
                            </td>
                            <td className="px-6 py-4">{room.name}</td>
                            <td className="px-6 py-4">{formatPrice(room.price)}</td>
                            <td className="px-6 py-4">{formatDate(room.createdAt.toString())}</td>
                            <td className="text-center px-10 py-4">
                                <div className="flex items-center justify-center">
                                    <UpdateButton id={room.id} />
                                    <DeleteButton id={room.id} imageUrl={room.image} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RoomTable;