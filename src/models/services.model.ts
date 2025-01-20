import { mockData } from "../data/mockData"
import { applyQueryOptions } from "../utils/models.utils"

export const Services = {
    findAll: async (
        sortOptions?: { [key: string]: string },
        filterOptions?: { [key: string]: any },
        page: number = 1,
        limit: number = 10
    ) => {
        return applyQueryOptions(
            mockData.db.services,
            sortOptions,
            filterOptions,
            page,
            limit
        )
    },
    findById: async (serviceId: string) => {
        return mockData.db.services.find((service) => service.id === serviceId)
    }, 
    findByProviderId: async (providerId: string) => {
        return mockData.db.services.filter(service => service.provider_id === providerId)
    }
}
