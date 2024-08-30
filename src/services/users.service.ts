import { Users } from "../models/users.model"

const getUsers = async () => {
    return await Users.findAll();
}

const getUserById = async (userId: string) => {
    return await Users.findById(userId);
}


export const usersService = {
    getUsers,
    getUserById
}
