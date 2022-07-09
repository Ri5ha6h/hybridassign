export const QUERY = "QUERY";

export const storeQuery = (query) => {
    return { type: QUERY, query: query };
  };