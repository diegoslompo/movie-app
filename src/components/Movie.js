import React, { Component } from 'react'
import styled from 'styled-components'
import MovieDetails from './MovieDetails'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

class Movie extends Component {

  state = {
    modalId: '',
  }

  static propTypes = {
    modalId: PropTypes.string,
    movieItem: PropTypes.array,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
  }

  openModal = (id) => { this.setState(() => ({ modalId: id}))}
  closeModal = () => this.setState(() => ({ modalId: '' }))

  render () {

    const { movieItem } = this.props
    const { modalId} = this.state

    return (
      <MovieList className="ds-movie__list">
        {movieItem.map((item) => (
          <Item className="bs-movie__list-item" key={item.imdbID}>
            <LinkItem onClick={() => this.openModal(item.imdbID)}>
              <Image src={item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/180x270/000'} alt={item.Title} />
            </LinkItem>
            <Modal isOpen={item.imdbID === modalId} >
              <MovieDetails item={item} />
              <button onClick={() => this.closeModal()}> Close </button>
            </Modal>
          </Item>
        ))}
      </MovieList>
    )
  }
} 

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
const Item = styled.div`
  width: 33.333%;
`;
const Image = styled.img`
  height: 100%;
`;
const LinkItem = styled.a`
  display: block;
  margin: 15px;
  height: 270px;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 6px 7px 13px 3px rgba(0, 0, 0, 0.23);

  &:hover::before {
    opacity: 0;
  }

  &::before {
    content: 'view more +';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #4c00e48a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    opacity: 1;
    transition: 0.4s;
  }
`;

export default Movie
