import { Request, Response } from "express";
import { AppRoute } from "../../interfaces/routes.interface";
import { handleGetUsers } from "../../controllers/users.controller";


export const userRoutes: AppRoute[] = [
    {
        path: '/users',
        method: 'get',
        handler: handleGetUsers
    }
]