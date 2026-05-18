import CardSkeleton from "./card-skeleton";

const RoomSkeleton = () => {
    return (
        <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto">
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 ">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    )
}

export default RoomSkeleton;