import { mockData } from "../data/mockData";

export const Users = {
  findAll: async (
    sortOptions?: { [key: string]: string },
    filterOptions?: { [key: string]: any },
    page: number = 1,
    limit: number = 10
  ) => {
    let users = mockData.db.users;

    if (sortOptions) {
      users = users.sort((a, b) => {
        // Compare each sort field in order until we find a difference
        for (const [field, direction] of Object.entries(sortOptions)) {
          const aValue = a[field as keyof typeof a];
          const bValue = b[field as keyof typeof b];

          // Only compare if values are different
          if (aValue !== bValue) {
            const isAscending = direction === "asc";
            const isGreater = aValue > bValue;

            // For ascending: return 1 if a > b, -1 if a < b
            // For descending: return 1 if b > a, -1 if b < a
            return isAscending ? (isGreater ? 1 : -1) : isGreater ? -1 : 1;
          }
        }

        // All compared fields were equal
        return 0;
      });
    }

    if (filterOptions) {
      users = users.filter((user) => {
        return Object.entries(filterOptions).every(([key, value]) => {
          return user[key as keyof typeof user] === value;
        });
      });
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalPages = Math.ceil(users.length / limit);

    // Get paginated results
    const paginatedUsers = users.slice(startIndex, endIndex);

    return {
      items: paginatedUsers,
      pagination: {
        total: users.length,
        totalPages,
        currentPage: page,
        limit
      }
    };
  },
  findById: async (userId: string) => {
    return mockData.db.users.find((user) => user.id === userId);
  },
};
