import { NextFunction, Request, Response } from "express";

export interface AppRoute {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete';
    handler: (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
    middleware?: (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
}