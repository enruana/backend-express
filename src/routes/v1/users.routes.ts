import { Request, Response } from "express";
import { AppRoute } from "../../interfaces/routes.interface";
import { handleGetUserById, handleGetUsers } from "../../controllers/users.controller";


export const userRoutes: AppRoute[] = [
    {
        path: '/users',
        method: 'get',
        handler: handleGetUsers
    },
    {
        path: '/users/:userId',
        method: 'get',
        handler: handleGetUserById
    }
]