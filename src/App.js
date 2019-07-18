import React, { Component } from 'react'
import * as MoviesAPI from './utils/MoviesAPI'
import styled from 'styled-components'
import './App.css';
// mainly components
import Movie from './components/Movie'
import Notification from './components/Notification'


class App extends Component {

  // {Set} initial state movies
  state = {
    movies: [],
    query:'',
    searchMovies: '',
    searchEmpty: false,
    infoFeat: {
      title: 'Search by',
      description: 'Batman - Avengers - Rick and Morty - [etc...]'
    },
    infoEmpty: {
      title: ':(',
      description: 'SORRY - NO DATABASE API RETURN MOVIES'
    }
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

    const { movies, query, searchEmpty, searchMovies, infoFeat, infoEmpty } = this.state 
    const currentMovies = searchMovies !== '' ? searchMovies : movies

    return (
      <Main className="ds-app">
        <Container>
          <Input 
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          { !searchEmpty ? (
            <div>
              <Notification
                title={infoFeat.title}
                description={infoFeat.description}
              />
              <Movie
                movieItem={currentMovies} 
              />
            </div>
          ):(
            <Notification
              title={infoEmpty.title}
              description={infoEmpty.description}
            />
          )}
        </Container>
      </Main>
    )
  }
} 

const Main = styled.div`
  height: 100%;
  font-family: monospace;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 600px;
`;

const Input = styled.input`
  border: 0;
  width: -webkit-fill-available;
  height: 40px;
  padding: 5px 15px;
  margin-top: 20px;
  border-radius: 3px;
  overflow: hidden;
  font-size: 18px;
`;

export default App;
