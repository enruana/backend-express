import { Response, Request } from "express";
import { usersService } from "../services/users.service";

export const handleGetUsers = async (req: Request, res: Response) => {

    try {
        res.send(await usersService.getUsers());
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

}

