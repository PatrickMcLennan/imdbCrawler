import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';

const Button = styled.button`
  position: fixed;
  bottom: 5vh;
  right: 5vh;
  font-size: 8rem;
  border-radius: 50%;
  padding: 3rem 4rem;
  cursor: pointer;
  border: 1px solid black;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Random extends Component {
  state = {
    show: false,
    movie: ''
  };

  getRandom = () => {
    const movies = [Object.values(this.props.movies)][0];
    const randomNum = Math.floor(Math.random() * movies.length);
    this.setState({
      show: true,
      movie: movies[randomNum]
    });
    console.log(this.state);
  };

  closeRandom = () => {
    this.setState({
      show: false,
      movie: ''
    });
  };

  render() {
    const { show, movie } = this.state;
    return (
      <>
        <Button onClick={this.getRandom}>?</Button>
        {show && (
          <Modal onClick={this.closeRandom}>
            <Movie movie={movie} />
          </Modal>
        )}
      </>
    );
  }
}

export default Random;
