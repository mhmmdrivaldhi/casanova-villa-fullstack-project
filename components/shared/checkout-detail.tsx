import Image from "next/image";
import { getReservationById } from "@/lib/data";
import { formatDate, formatPrice } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns"

const CheckoutDetail = async ({reservationId}: {reservationId: string}) => {
    const reservation = await getReservationById(reservationId);
    if (!reservation || !reservation.Payment) return <h1>No Reservation Found</h1>

    const duration = differenceInCalendarDays(reservation.endDate, reservation.startDate);

    return (
        <div className="grid md:grid-cols-2 gap-5">
            <div className="order-2">
                <div className="flex flex-col mb-2 items-start bg-white border border-gray-200 rounded-md md:flex-row w-full">
                    <div className="aspect-video relative">
                        <Image
                            src={reservation.Room.image}
                            alt={reservation.Room.name}
                            width={500}
                            height={300}
                            className="object-cover w-full rounded-t-md aspect-video md:rounded-none md:rounded-s-sm"
                        />
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{reservation.Room.name}</h5>
                        <div className="flex items-center gap-2 text-2xl text-gray-600">
                            <div className="flex items-center justify-center gap-2">
                                <span className="font-semibold text-2xl text-gray-900">{formatPrice(reservation.Room.price)}</span>
                                <span className="text-gray-700 text-xs font-semibold italic">/Night</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Payment Button */}
            </div>
            <div className="border border-gray-200 px-3 py-5 bg-white rounded-md">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="py-2 font-semibold">Reservation ID</td>
                            <td className="py-2 text-right truncate">{reservation.id}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Name</td>
                            <td className="py-2 text-right truncate">{reservation.User.name}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Email</td>
                            <td className="py-2 text-right truncate">{reservation.User.email}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Phone Number</td>
                            <td className="py-2 text-right truncate">{reservation.User.phone}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Arrival</td>
                            <td className="py-2 text-right truncate">{formatDate(reservation.startDate.toISOString())}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Departure</td>
                            <td className="py-2 text-right truncate">{formatDate(reservation.endDate.toISOString())}</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Duration</td>
                            <td className="py-2 text-right truncate">
                                <span>
                                    {duration} {duration <= 1 ? "Night" : "Nights"}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Amount Due</td>
                            <td className="py-2 text-right truncate">
                                <span>
                                    {formatPrice(reservation.Room.price * duration)}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Status</td>
                            <td className="py-2 text-right truncate">
                                {reservation.Payment.status}
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default CheckoutDetail;

