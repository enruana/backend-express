import express, { Request, Response } from "express";
import { config } from "./helpers/config";
import loadRoutes from "./routes";

const app = express();

loadRoutes(app);

app.listen(config.PORT, () => {
  console.log("Service running on:", config.PORT);
});