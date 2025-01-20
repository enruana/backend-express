import { Response, Request } from "express";
import { usersService } from "../services/users.service";
import { extractQueryOptions } from "../utils/controller.utils";

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const { sortOptions, filterOptions, page, limit } = extractQueryOptions(req);
    const users = await usersService.getUsers(
      sortOptions,
      filterOptions,
      page,
      limit
    );
    res.send({
      data: users,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const handleGetUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await usersService.getUserById(userId);
    res.send({
      data: user,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const handleGetUserBookings = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userBookings = await usersService.getUserBookings(userId);
    res.send({
      data: userBookings,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
