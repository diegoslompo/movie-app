import React, { Component } from 'react'
import MovieDetails from './MovieDetails'
import Modal from 'react-modal'


class Movie extends Component {

  state = {
    modalId: '',
  }

  openModal = (id) => { this.setState(() => ({ modalId: id}))}
  closeModal = () => this.setState(() => ({ modalId: '' }))

  render () {

    const { movieItem } = this.props
    const { modalId} = this.state

    return (
      <div className="ds-movie__list">
        {movieItem.map((item) => (
          <div className="bs-movie__list-item" key={item.imdbID}>
              <img src={item.Poster} alt={item.Title} />
              <button onClick={() => this.openModal(item.imdbID)}> View More </button>
              <Modal isOpen={item.imdbID === modalId} >
                <MovieDetails item={item} />
                <button onClick={() => this.closeModal()}> Close </button>
              </Modal>
          </div>
        ))}
      </div>
    )
  }
} 
export default Movie
