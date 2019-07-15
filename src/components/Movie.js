import React, { Component } from 'react'
import MovieDetails from './MovieDetails'
import Modal from 'react-modal'

class Movie extends Component {
  
  state = {
    commentOpen: false
  }

  openModal = () => this.setState(() => ({ commentOpen: true }))
  closeModal = () => this.setState(() => ({ commentOpen: false }))

  render () {

    const { movieItem } = this.props
    const { commentOpen } = this.state

    return (
      <div className="ds-movie__list">
        {movieItem.Search.map((item) => (
          <div className="bs-movie__list-item" key={item.imdbID}>
              <img src={item.Poster} alt={item.Title} />
              <span>
                {item.Title}
              </span>

              <button onClick={this.openModal}> View More </button>

              <Modal
                isOpen={commentOpen}
              >
                <MovieDetails
                  item={item}
                />
                <button onClick={this.closeModal}> Close</button>
              </Modal>
          </div>
        ))}
      </div>
    )
  }
} 
export default Movie
