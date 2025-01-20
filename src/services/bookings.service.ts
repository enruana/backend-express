import { Bookings } from "../models/bookings.model"

const getBookings = async (
    sortOptions?: { [key: string]: string },
    filterOptions?: { [key: string]: any },
    page: number = 1,
    limit: number = 10
) => {
    return await Bookings.findAll(sortOptions, filterOptions, page, limit);
}

const getBookingById = async (bookingId: string) => {
    return await Bookings.findById(bookingId);
}


export const bookingsService = {
    getBookings,
    getBookingById,
}
