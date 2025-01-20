import { Request } from "express";

export const extractQueryOptions = (req: Request) => {
  const sortParam = req.query.sort as string;
  let sortOptions: { [key: string]: string } = {};
  let filterOptions: { [key: string]: any } = {};

  // Process sort parameters
  if (sortParam) {
    const sortFields = sortParam.split(",");
    sortFields.forEach((field) => {
      const [key, direction] = field.split(":");
      if (direction && ["asc", "desc"].includes(direction.toLowerCase())) {
        sortOptions[key] = direction.toLowerCase();
      }
    });
  }

  // Extract filter parameters
  Object.keys(req.query).forEach((key) => {
    if (key === "sort" || key === "page" || key === "limit") return;
    filterOptions[key] = req.query[key];
  });

  // Extract pagination
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  return { sortOptions, filterOptions, page, limit };
}; 