import HeaderSection from "@/components/shared/header-section";
import Main from "@/components/shared/main-section";
import RoomSkeleton from "@/components/shared/room-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Room Of Casanova Villa",
    description: "Explore our premium villa collection and find the perfect space for your next getaway."
};

const RoomPage = () => {
    return (
        <div>
            <HeaderSection title="Premium Villa Collection" subtitle="From luxury suites to private villas, each space is carefully crafted to deliver relaxation, sophistication, and memorable hospitality experiences." />
            <div className="mt-10 px-4">
                <Suspense fallback={<RoomSkeleton/>}>
                    <Main />
                </Suspense>
            </div>
        </div>
    )
}

export default RoomPage;