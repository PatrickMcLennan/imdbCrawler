import { createGlobalStyle } from 'styled-components';
import 'isomorphic-fetch';
import Meta from '../components/Meta';
import Heading from '../components/Heading';
import MovieGrid from '../components/MovieGrid';
import Random from '../components/Random';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-family: Helvetica, Arial, sans-serif;
    background: #e3e3e3
  }
  a,
  a:visited {
    text-decoration: none;
    color: currentColor
  }
`;

const Home = props => (
  <>
    <Meta />
    <GlobalStyle />
    <Heading />
    <MovieGrid movies={props} />
    <Random movies={props} />
  </>
);

Home.getInitialProps = async ({ req }) => {
  const call = await fetch('http://localhost:4000/');
  const movies = await call.json();
  return movies;
};

export default Home;
