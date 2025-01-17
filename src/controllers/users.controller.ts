import { Response, Request } from "express";
import { usersService } from "../services/users.service";

export const handleGetUsers = async (req: Request, res: Response) => {

  const sortParam = req.query.sort as string;
  let sortOptions: { [key: string]: string } = {};

  if (sortParam) {
    // Split multiple sort fields (e.g. "name:asc,created_at:desc")
    const sortFields = sortParam.split(",");

    // Process each sort field
    sortFields.forEach((field) => {
      const [key, direction] = field.split(":");
      // Validate direction is either asc or desc
      if (direction && ["asc", "desc"].includes(direction.toLowerCase())) {
        sortOptions[key] = direction.toLowerCase();
      }
    });
  }

  try {
    const users = await usersService.getUsers(sortOptions);
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
