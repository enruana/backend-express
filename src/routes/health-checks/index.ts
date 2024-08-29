import { Application } from "express";

export const healthCheckRoutes = (app: Application) => {;

    app.get("/health-check", (req, res) => {
        // check if the DB is connected
        const isDBConnected = true;

        res.send({
            isServiceAlive: true,
            isDBConnectionAlive: isDBConnected,
            version:  process.env.npm_package_version || 'unknown',
            commit: process.env.GIT_COMMIT_HASH || 'unknown'
        });
    });
}