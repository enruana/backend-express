import { mockData } from "../data/mockData"

export const Bookings = {
    findAll: async () => {
        return mockData.db.bookings
    },
    findById: async (bookingId: string) => {
        return mockData.db.bookings.find(booking => booking.id === bookingId)
    },
    findByUserId: async (userId: string) => {
        return mockData.db.bookings.filter(booking => booking.user_id === userId)
    },
    findByServiceId: async (serviceId: string) => {
        return mockData.db.bookings.filter(booking => booking.service_id === serviceId)
    }
}