import { DeleteRoom } from '@/lib/actions';
import Link from 'next/link';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export const DeleteButton = ({id, imageUrl}: {id: string, imageUrl: string}) => {
    const DeleteRoomWithId =  DeleteRoom.bind(null, id, imageUrl);
    return (
        <form action={DeleteRoomWithId}>
            <button type="submit" className="bg-transparent border border-red-500 hover:bg-red-500 hover:text-white text-red-500 py-2 px-4 rounded-lg">
                <FaTrashAlt />
            </button>
        </form>
    )
} 

export const UpdateButton = ({ id }: { id: string }) => {
    return (
        <Link href={`/admin/room/edit/${id}`} className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded-lg mr-2">
            <FaEdit />
        </Link>
    )
}