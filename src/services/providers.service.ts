import { Providers } from "../models/providers.model"
import { Services } from "../models/services.model";

const getProviders = async () => {
    return await Providers.findAll();
}

const getProviderById = async (providerId: string) => {
    return await Providers.findById(providerId);
}

const getProviderServices = async (providerId: string) => {
    return Services.findByProviderId(providerId);
}



export const providersService = {
    getProviders,
    getProviderById,
    getProviderServices
}
