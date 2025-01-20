import { mockData } from "../data/mockData"
import { applyQueryOptions } from "../utils/models.utils"

export const Bookings = {
    findAll: async (
        sortOptions?: { [key: string]: string },
        filterOptions?: { [key: string]: any },
        page: number = 1,
        limit: number = 10
    ) => {
        return applyQueryOptions(
            mockData.db.bookings,
            sortOptions,
            filterOptions,
            page,
            limit
        )
    },
    findById: async (bookingId: string) => {
        return mockData.db.bookings.find((booking) => booking.id === bookingId)
    },
    findByUserId: async (userId: string) => {
        return mockData.db.bookings.filter(booking => booking.user_id === userId)
    },
    findByServiceId: async (serviceId: string) => {
        return mockData.db.bookings.filter(booking => booking.service_id === serviceId)
    }
}