import { Response, Request } from "express";


export const handleGetUsers = async (req: Request, res: Response) => {

    res.send('Hello from the users controller!');

}

