import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


class Notification extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render () {

    const { title, description } = this.props

    return (
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    )
  }
} 

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 120px;
  margin-bottom: 40px;
`;
const Title = styled.h2`
  width: 100%;
  font-size: 45px;
  text-align: center;
  color: #fff;
  margin: 40px 0 0px;
`;
const Description = styled.p`
  width: 100%;
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: #fff;
`;


export default Notification
