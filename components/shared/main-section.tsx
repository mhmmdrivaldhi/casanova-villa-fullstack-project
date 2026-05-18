import { getRooms } from "@/lib/data";
import Card from "../home/Card";
import { notFound } from "next/navigation";

const Main = async () => {
    const rooms = await getRooms();
    if (!rooms) return notFound();
    return (
        <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid gap-7 md:grid-cols-3">
                {rooms.map((room) => (
                    <Card key={room.id} room={room} />
                ))}
            </div>
        </div>
    )
}

export default Main;