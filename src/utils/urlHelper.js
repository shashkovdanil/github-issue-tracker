// @flow
export const urlHelper = (query: string, page: number = 1, perPage: number = 30) => ({
  pathname: '/',
  search: `${query}&page=${page}&per_page=${perPage}`
})
