type SortOptions = { [key: string]: string };
type FilterOptions = { [key: string]: any };

export const applyQueryOptions = <T>(
    data: T[],
    sortOptions?: SortOptions,
    filterOptions?: FilterOptions,
    page: number = 1,
    limit: number = 10
) => {
    let results = [...data];

    if (sortOptions) {
        results = results.sort((a, b) => {
            for (const [field, direction] of Object.entries(sortOptions)) {
                const aValue = a[field as keyof typeof a];
                const bValue = b[field as keyof typeof b];

                if (aValue !== bValue) {
                    const isAscending = direction === "asc";
                    const isGreater = aValue > bValue;
                    return isAscending ? (isGreater ? 1 : -1) : isGreater ? -1 : 1;
                }
            }
            return 0;
        });
    }

    if (filterOptions) {
        results = results.filter((item) => {
            return Object.entries(filterOptions).every(([key, value]) => {
                return item[key as keyof typeof item] === value;
            });
        });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalPages = Math.ceil(results.length / limit);
    const paginatedResults = results.slice(startIndex, endIndex);

    return {
        items: paginatedResults,
        pagination: {
            total: results.length,
            totalPages,
            currentPage: page,
            limit
        }
    };
}; 