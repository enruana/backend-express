import { Services } from "../models/services.model";
 import { Ratings } from "../models/ratings.model";
 import { Bookings } from "../models/bookings.model";

const getServices = async () => {
    return await Services.findAll();
}

const getServiceById = async (serviceId: string) => {
    return await Services.findById(serviceId);
}

const getServiceRatings = async (serviceId: string) => {
    return Ratings.findByServiceId(serviceId);
}

const getServiceBookings = async (serviceId: string) => {
    return Bookings.findByServiceId(serviceId);
}

export const servicesService = {
    getServices,
    getServiceById,
    getServiceRatings,
    getServiceBookings
}