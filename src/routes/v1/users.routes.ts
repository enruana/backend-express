import { Request, Response } from "express";
import { AppRoute } from "../../interfaces/routes.interface";


export const userRoutes: AppRoute[] = [
    {
        path: '/users',
        method: 'get',
        handler: async (req: Request, res: Response) => {
            res.send('Hello from users');
        }
    }
]