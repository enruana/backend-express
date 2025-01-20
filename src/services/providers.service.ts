import { Providers } from "../models/providers.model"
import { Services } from "../models/services.model";

const getProviders = async (
    sortOptions?: { [key: string]: string },
    filterOptions?: { [key: string]: any },
    page: number = 1,
    limit: number = 10
) => {
    return await Providers.findAll(sortOptions, filterOptions, page, limit);
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
