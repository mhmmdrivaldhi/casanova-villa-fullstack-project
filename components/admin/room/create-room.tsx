import { FaPlusCircle } from "react-icons/fa";
import CreateForm from "./create-form";
import { getAmenities } from "@/lib/data";

const CreateRoom = async () => {
    const amenities = await getAmenities();
    if (!amenities) return null;

    return (
        <div>
            <div>
                <h4 className="flex items-center gap-2 text-2xl font-semibold mb-4 uppercase">
                    <FaPlusCircle />
                    Create New Room
                </h4>
            </div>
            <CreateForm amenities={amenities} />
        </div>
    );
};

export default CreateRoom;