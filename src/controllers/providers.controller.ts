import { Response, Request } from "express";
import { providersService } from "../services/providers.service";
import { extractQueryOptions } from "../utils/controller.utils";

export const handleGetProviders = async (req: Request, res: Response) => {
    try {
        const { sortOptions, filterOptions, page, limit } = extractQueryOptions(req);
        const providers = await providersService.getProviders(
            sortOptions,
            filterOptions,
            page,
            limit
        );
        res.send({
            data: providers,
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const handleGetProviderById = async (req: Request, res: Response) => {
    try {
        const providerId = req.params.providerId;
        const provider = await providersService.getProviderById(providerId);
        res.send({
            data: provider
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}


export const handleGetProviderServices = async (req: Request, res: Response) => {
    try {
        const providerId = req.params.providerId;
        const services = await providersService.getProviderServices(providerId);
        res.send({
            data: services
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}
