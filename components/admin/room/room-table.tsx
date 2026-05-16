import Image from "next/image";
import { getRooms } from "@/lib/data";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { formatDate, formatPrice } from "@/lib/utils";

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
                            <td className="text-center px-10 py-4 ">
                                <button className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded-lg mr-2">
                                    <FaEdit />
                                </button>
                                <button className="bg-transparent border border-red-500 hover:bg-red-500 hover:text-white text-red-500 py-2 px-4 rounded-lg">
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RoomTable;