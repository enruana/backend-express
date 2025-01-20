import { mockData } from "../data/mockData"
import { applyQueryOptions } from "../utils/models.utils"

export const Ratings = {
    findAll: async (
        sortOptions?: { [key: string]: string },
        filterOptions?: { [key: string]: any },
        page: number = 1,
        limit: number = 10
    ) => {
        return applyQueryOptions(
            mockData.db.rating_reviews,
            sortOptions,
            filterOptions,
            page,
            limit
        )
    },
    findById: async (ratingId: string) => {
        return mockData.db.rating_reviews.find((rating) => rating.id === ratingId)
    },
    findByServiceId: async (serviceId: string) => {
        return mockData.db.rating_reviews.filter(rating => rating.service_id === serviceId)
    }
}
