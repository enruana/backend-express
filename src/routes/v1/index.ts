import express, { NextFunction, Request, Response, Router } from 'express';
import { userRoutes } from './users.routes';
import { bookingsRoutes } from './bookings.routes';
import { providersRoutes } from './providers.routes';
import { servicesRoutes } from './services.routes';

import { AppRoute } from '../../interfaces/routes.interface';

const router: Router = express.Router();

const routes: AppRoute[] = [
    ...userRoutes,
    ...bookingsRoutes,
    ...providersRoutes,
    ...servicesRoutes
]


routes.forEach(route => {
    router[route.method](route.path, (req: Request, res: Response, next: NextFunction) => {
        route.handler(req, res, next);
    })
})


export default router;