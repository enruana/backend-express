import { mockData } from "../data/mockData"

export const Users = {
    findAll: async () => {
        return mockData.db.users
    },
    findById: async (userId: string) => {
        return mockData.db.users.find(user => user.id === userId)
    }
}