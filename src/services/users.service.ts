import { Users } from "../models/users.model"

const getUsers = async () => {
    return await Users.find();
}


export const usersService = {
    getUsers
}
