import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MovieDetails extends Component {

  static propTypes = {
    item: PropTypes.object
  }

  render () {

    const { item } = this.props

    return (
      <div className="ds-movie__details">
        <img src={item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/180x270/000'} alt={item.Title}/>
        <h2>{item.Title}</h2>
        <p>Year: {item.Year}</p>
        <p>Type: {item.Type}</p>
        <p>Id: {item.imdbID}</p>
      </div>
    )
  }
} 
export default MovieDetails
