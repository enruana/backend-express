import { Request, Response } from "express";
import { AppRoute } from "../../interfaces/routes.interface";
import { handleGetBookingById, handleGetBookings } from "../../controllers/bookings.controller";


export const bookingsRoutes: AppRoute[] = [
    {
        path: '/bookings',
        method: 'get',
        handler: handleGetBookings
    },
    {
        path: '/bookings/:bookingId',
        method: 'get',
        handler: handleGetBookingById
    },
]