import { Response, Request } from "express";
import { bookingsService } from "../services/bookings.service";

export const handleGetBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await bookingsService.getBookings();
        res.send({
            data: bookings,
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const handleGetBookingById = async (req: Request, res: Response) => {
    try {
        const bookingId = req.params.bookingId;
        const booking = await bookingsService.getBookingById(bookingId);
        res.send({
            data: booking
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}
