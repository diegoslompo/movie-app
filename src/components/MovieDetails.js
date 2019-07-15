import React, { Component } from 'react'

class MovieDetails extends Component {

  render () {

    const { item } = this.props

    return (
      <div className="ds-movie__details">
        <img src={item.Poster} alt={item.Title}/>
        <h2>{item.Title}</h2>
        <p>Year: {item.Year}</p>
        <p>Type: {item.Type}</p>
        <p>Id: {item.imdbID}</p>
      </div>
    )
  }
} 
export default MovieDetails
