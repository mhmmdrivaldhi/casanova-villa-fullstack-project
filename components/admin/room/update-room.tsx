import { FaPlusCircle } from "react-icons/fa";
import { getAmenities, getRoomById } from "@/lib/data";
import UpdateForm from "./update-form";
import { notFound } from "next/navigation";

const UpdateRoom = async ({roomId}: {roomId: string}) => {
    const [amenities, room] = await Promise.all([
        getAmenities(),
        getRoomById(roomId)
    ])
    if (!amenities || !room) return notFound();
    
    return (
        <div>
            <div>
                <h4 className="flex items-center gap-2 text-2xl font-semibold mb-4 uppercase">
                    <FaPlusCircle />
                    Update Room
                </h4>
            </div>
            <UpdateForm amenities={amenities} room={room} />
        </div>
    );
};

export default UpdateRoom;