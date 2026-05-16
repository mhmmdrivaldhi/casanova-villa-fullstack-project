import RoomTable from "@/components/admin/room/room-table";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { Suspense } from "react";

const RoomPage = () => {
    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold text-gray-900 uppercase">Room Management</h1>
                <Link href="/admin/room/create" className="text-sm bg-white border border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white py-2 px-4 rounded-sm font-semibold uppercase">
                    <FaPlusCircle className="inline mr-1 mb-1" />
                    Add New Room
                </Link>
            </div>
            <Suspense fallback={<p className="text-center text-gray-500 italic font-semibold">Loading Data</p>}>
                <RoomTable />
            </Suspense>
        </div>
    )
}

export default RoomPage;