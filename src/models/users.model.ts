import { mockData } from "../data/mockData"

export const Users = {
    find: async () => {
        return mockData.db.users
    },
}