import { mockData } from "../data/mockData";
import { applyQueryOptions } from "../utils/models.utils";

export const Users = {
  findAll: async (
    sortOptions?: { [key: string]: string },
    filterOptions?: { [key: string]: any },
    page: number = 1,
    limit: number = 10
  ) => {
    return applyQueryOptions(
      mockData.db.users,
      sortOptions,
      filterOptions,
      page,
      limit
    );
  },
  findById: async (userId: string) => {
    return mockData.db.users.find((user) => user.id === userId);
  },
};
