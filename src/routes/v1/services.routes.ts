import { Request, Response } from "express";
import { AppRoute } from "../../interfaces/routes.interface";
import { handleGetServiceBookings, handleGetServiceById, handleGetServiceRatings, handleGetServices } from "../../controllers/services.controller";

export const servicesRoutes: AppRoute[] = [
    {
        path: '/services',
        method: 'get',
        handler: handleGetServices
    },
    {
        path: '/services/:serviceId',
        method: 'get',
        handler: handleGetServiceById
    },
    {
        path: '/services/:serviceId/ratings',
        method: 'get',
        handler: handleGetServiceRatings
    },
    {
        path: '/services/:serviceId/bookings',
        method: 'get',
        handler: handleGetServiceBookings
    }
]
