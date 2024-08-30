import { mockData } from "../data/mockData"

export const Providers = {
    findAll: async () => {
        return mockData.db.providers
    },
    findById: async (providerId: string) => {
        return mockData.db.providers.find(provider => provider.id === providerId)
    }
}
