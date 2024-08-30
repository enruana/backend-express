import { Bookings } from "../models/bookings.model"

const getBookings = async () => {
    return await Bookings.findAll();
}

const getBookingById = async (bookingId: string) => {
    return await Bookings.findById(bookingId);
}


export const bookingsService = {
    getBookings,
    getBookingById,
}
