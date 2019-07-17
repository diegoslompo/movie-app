const api = "http://www.omdbapi.com"
const preSearch = "spider man"
const apiToken = "7485af19"

export const getAll = () =>
  fetch(`${api}/?apikey=${apiToken}&s=${preSearch}`)
    .then(res => res.json())
    .then(data => data.Search)

export const search = (query) =>
  fetch(`${api}/?apikey=${apiToken}&s=${query}`, {
    method: 'POST',
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.Search !== undefined ? data.Search : 0)

