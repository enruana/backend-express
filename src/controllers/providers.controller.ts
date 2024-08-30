import { Response, Request } from "express";
import { providersService } from "../services/providers.service";

export const handleGetProviders = async (req: Request, res: Response) => {
    try {
        const providers = await providersService.getProviders();
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
