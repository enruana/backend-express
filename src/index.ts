import express, { Request, Response } from "express";
import { config } from "./helpers/config";

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app.listen(config.PORT, () => {
  console.log("Service running on:", config.PORT);
});