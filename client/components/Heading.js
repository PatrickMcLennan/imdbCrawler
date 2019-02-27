import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid black;
  box-shadow: 3px 3px 20px black;
  margin-bottom: 2vh;
  padding: 2vh;
`;

const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  letter-spacing: 0.25vw;
  text-align: center;

  &::after {
    content: '';
    display: block;
    background: black;
    width: 50%;
    height: 1px;
    margin: 2vh auto;
  }
`;
const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.0675vw;
  text-align: center;
`;

const Heading = props => (
  <Header>
    <H1>Random Movie Picker</H1>
    <H2>Here are IMDB's top 250 movies to help with your indecision</H2>
  </Header>
);

export default Heading;
