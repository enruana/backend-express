import { Users } from "../models/users.model"
import { Bookings } from "../models/bookings.model"

const getUsers = async () => {
    return await Users.findAll();
}

const getUserById = async (userId: string) => {
    return await Users.findById(userId);
}

const getUserBookings = async (userId: string) => {
    return await Bookings.findByUserId(userId);
}


export const usersService = {
    getUsers,
    getUserById,
    getUserBookings
}
