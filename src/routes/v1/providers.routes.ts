import { Request, Response } from "express";
import { AppRoute } from "../../interfaces/routes.interface";
import { handleGetProviderById, handleGetProviders, handleGetProviderServices } from "../../controllers/providers.controller";

export const providersRoutes: AppRoute[] = [
    {
        path: '/providers',
        method: 'get',
        handler: handleGetProviders
    },
    {
        path: '/providers/:providerId',
        method: 'get',
        handler: handleGetProviderById
    },
    {
        path: '/providers/:providerId/services',
        method: 'get',
        handler: handleGetProviderServices
    },
]
