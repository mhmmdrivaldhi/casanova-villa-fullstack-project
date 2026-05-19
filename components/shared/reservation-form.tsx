'use client';

import { useState, useActionState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createReservation } from "@/lib/actions";
import { RoomDetailProps } from "@/types/room";
import clsx from "clsx";

const ReservationForm = ({room}: {room: RoomDetailProps}) => {
    const StartDate = new Date();
    const EndDate = addDays(StartDate, 1);

    const [startDate, setStartDate] = useState(StartDate);
    const [endDate, setEndDate] = useState(EndDate);

    const handleDateChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    const [state, formAction, isPending] = useActionState(createReservation.bind(null, room.id, room.price, startDate, endDate), null);

    return (
        <div className="">
            <form action={formAction}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-900">Arrival - Departure</label>
                    <DatePicker
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        selectsRange={true}
                        onChange={handleDateChange}
                        dateFormat={"dd-MM-YYYY "}
                        wrapperClassName="w-full"
                        className="py-2 px-4 rounded-md border border-gray-300 w-full"
                    />
                    <div aria-live="polite" aria-atomic="true">
                        <p className="text-xs text-red-500 italic mt-1">{state?.message}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-900">Your Name</label>
                    <input type="text" name="name" className="py-2 px-4 rounded-md border border-gray-300 w-full" placeholder="e.g John Doe" />
                    <div aria-live="polite" aria-atomic="true">
                        <p className="text-xs text-red-500 italic mt-1">{state?.error?.name}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-900">Phone Number</label>
                    <input type="number" name="phone" className="py-2 px-4 rounded-md border border-gray-300 w-full" placeholder="e.g 081512435467" />
                    <div aria-live="polite" aria-atomic="true">
                        <p className="text-xs text-red-500 italic mt-1">{state?.error?.phone}</p>
                    </div>
                </div>
                <button type="submit" className={clsx("px-10 py-3 text-center font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors w-full cursor-pointer", {
                    "cursor-progress animate-pulse opacity-50": isPending,
                })} disabled={isPending}>
                    {isPending ? "Reserving..." : "Reserve Now"}
                </button>
            </form>
        </div>
    )
}

export default ReservationForm;