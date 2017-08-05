export const urlHelper = (query, page = 1, perPage = 30) => ({
  pathname: '/',
  search: `${query}&page=${page}&per_page=${perPage}`
});
