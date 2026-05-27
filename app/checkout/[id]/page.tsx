import CheckoutDetail from "@/components/shared/checkout-detail";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Reservation Details | Casanova Villa",
}

const CheckoutPage = async ({params}: {params: Promise<{id: string}>}) => {
    const reservationId = (await params).id;

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-2">Reservation Details</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <CheckoutDetail reservationId={reservationId} />
            </Suspense>
        </div>
    )
}

export default CheckoutPage;