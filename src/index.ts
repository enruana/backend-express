import express, { Request, Response } from "express";
const app = express();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  console.log('get request received');
  response.status(200).send("Hello World");
  console.log('get request responded');
});
 
app.listen(PORT, () => { 
  console.log("Running at PORT ", PORT);
  console.log(process.env)
});