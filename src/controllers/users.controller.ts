import { Response, Request } from "express";
import { usersService } from "../services/users.service";

export const handleGetUsers = async (req: Request, res: Response) => {

    res.send(await usersService.getUsers());

}

