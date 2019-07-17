import React, { Component } from 'react'
import * as MoviesAPI from './utils/MoviesAPI'
import { Route } from 'react-router-dom'
// mainly components
import Movie from './components/Movie'


class App extends Component {

  // {Set} initial state movies
  state = {
    movies: [],
    query:'',
    searchMovies: '',
    searchEmpty: false
  }

  // [getAll] movies the server API use the async + await
  async componentDidMount() {
    const movies = await MoviesAPI.getAll()
    this.setState({ movies })
   }  

  updateQuery = (query) => {
    this.setState({ query: query })
    this.changeQuery(query)
  }

  changeQuery = (resQuery) => {
    if (resQuery !== '') {
      MoviesAPI.search(resQuery).then((result) => {
        if (this.state.query !== '' && result.length > 0) {
          this.setState({ searchMovies: result, searchEmpty: false })
        } else {
          this.setState({ searchMovies: '', searchEmpty: true })
        }
      })
    } else {
      this.setState({ movies: this.state.movies, searchEmpty: false })
    }
  }

  
  render () {

    const { movies, query, searchEmpty, searchMovies } = this.state 
    const currentMovies = searchMovies !== '' ? searchMovies : movies

    return (
      <div className="ds-app">
        <Route path='/search' render={() => (
          <div>teste</div>
        )}/>

        <input 
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        { !searchEmpty ? (
          <Route exact path='/' render={() => (
            <Movie
              movieItem={currentMovies} 
            />
          )}/>
        ): (
          <div>Não há retorno da API</div>
          // <NotificationSearch/>
        )}
      </div>
    )
  }
} 

export default App;
