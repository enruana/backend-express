import { Application } from 'express';
import { healthCheckRoutes } from './health-checks';
import v1Routes from './v1';

export default (app: Application) => {

    healthCheckRoutes(app);

    app.use('/api/v1', v1Routes);

}