
const allApi = "http://www.omdbapi.com/?apikey=7485af19&s=batman"

export const getAll = () =>
  fetch(allApi)
    .then(function(response) {
      return response.json();
    }) 
 

