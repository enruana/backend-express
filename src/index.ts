import express, { Request, Response } from "express";
const app = express();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
});
 
app.listen(PORT, () => { 
  console.log("Running at PORT ", PORT);
});