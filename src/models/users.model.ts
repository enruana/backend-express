import { mockData } from "../data/mockData";

export const Users = {
  findAll: async (sortOptions?: { [key: string]: string }) => {
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
            return isAscending ? (isGreater ? 1 : -1) : (isGreater ? -1 : 1);
          }
        }

        // All compared fields were equal
        return 0;
      });
    }

    return users;
  },
  findById: async (userId: string) => {
    return mockData.db.users.find((user) => user.id === userId);
  },
};
