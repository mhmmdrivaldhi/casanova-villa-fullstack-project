export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const formattedDate = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
    });
    return formattedDate.format(date);
}

export const formatPrice = (amount: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 3,
    });
    return formattedPrice.format(amount);   
}