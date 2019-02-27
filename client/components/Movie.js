import styled from 'styled-components';

const Card = styled.figure`
  display: inline-flex;
  margin: 1.5vh;
  padding: 1.5vh;
  border: 1px solid black;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  & img {
    height: 125px;
    width: auto;

    margin-right: 1.5vh;
  }

  & figcaption {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  & h3 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
  }

  & h4 {
    font-size: 1.75rem;
    font-weight: 100;
  }

  & a {
    border: 1px solid black;
    padding: 1rem 2rem;
    transform: translateY(300%);
    transition: all 0.3s ease-out;

    & span {
      font-style: italic;
    }
  }

  &:hover {
    transform: scale(1.1);

    & a {
      transform: translateY(0);
    }
  }
`;

const Movie = ({ movie: { title, link, picture, release, rating } }) => (
  <Card>
    <img src={picture} alt={title} />
    <figcaption>
      <h3>{title}</h3>
      <h4>{rating}</h4>
      <h5>{release}</h5>
      <a href={link} target="_blank">
        <span>{title}</span> IMDB
      </a>
    </figcaption>
  </Card>
);

export default Movie;

{
  /* <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg" width="45" height="67" alt="The Shawshank Redemption">

<img alt="The Shawshank Redemption Poster" title="The Shawshank Redemption Poster" src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"></img> */
}
