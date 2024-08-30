import { mockData } from "../data/mockData"

export const Ratings = {
    findAll: async () => {
        return mockData.db.rating_reviews
    },
    findById: async (ratingId: string) => {
        return mockData.db.rating_reviews.find(rating => rating.id === ratingId)
    },
    findByServiceId: async (serviceId: string) => {
        return mockData.db.rating_reviews.filter(rating => rating.service_id === serviceId)
    }
}
