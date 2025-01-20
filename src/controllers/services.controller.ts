import { Response, Request } from "express";
import { servicesService } from "../services/services.service";
import { extractQueryOptions } from "../utils/controller.utils";

export const handleGetServices = async (req: Request, res: Response) => {
    try {
        const { sortOptions, filterOptions, page, limit } = extractQueryOptions(req);
        const services = await servicesService.getServices(
            sortOptions,
            filterOptions,
            page,
            limit
        );
        res.send({
            data: services,
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const handleGetServiceById = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.serviceId;
        const service = await servicesService.getServiceById(serviceId);
        res.send({
            data: service
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const handleGetServiceRatings = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.serviceId;
        const ratings = await servicesService.getServiceRatings(serviceId);
        res.send({
            data: ratings
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const handleGetServiceBookings = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.serviceId;
        const bookings = await servicesService.getServiceBookings(serviceId);
        res.send({
            data: bookings
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}
