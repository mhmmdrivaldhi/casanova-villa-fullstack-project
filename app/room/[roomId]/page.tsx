import RoomDetail from "@/components/shared/room-detail";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Room Detail",    
}

const RoomDetailPage = async ({params}: {params: Promise<{roomId: string}>}) => {
    const roomId = (await params).roomId;

    return (
        <div className="mt-10">
            <Suspense fallback={<p>Loading...</p>}>
                <RoomDetail roomId={roomId}/>
            </Suspense>
        </div>
    )
}

export default RoomDetailPage;