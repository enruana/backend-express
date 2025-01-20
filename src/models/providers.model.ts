import { mockData } from "../data/mockData"
import { applyQueryOptions } from "../utils/models.utils"

export const Providers = {
    findAll: async (
        sortOptions?: { [key: string]: string },
        filterOptions?: { [key: string]: any },
        page: number = 1,
        limit: number = 10
    ) => {
        return applyQueryOptions(
            mockData.db.providers,
            sortOptions,
            filterOptions,
            page,
            limit
        )
    },
    findById: async (providerId: string) => {
        return mockData.db.providers.find(provider => provider.id === providerId)
    }
}
