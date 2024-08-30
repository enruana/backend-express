import { mockData } from "../data/mockData"

export const Services = {
    findAll: async () => {
        return mockData.db.services
    },
    findById: async (serviceId: string) => {
        return mockData.db.services.find(service => service.id === serviceId)
    }, 
    findByProviderId: async (providerId: string) => {
        return mockData.db.services.filter(service => service.provider_id === providerId)
    }
}
