import styled from 'styled-components';
import Movie from './Movie';

const Grid = styled.div`
  margin: 2vh 2.5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieGrid = ({ movies }) => (
  <Grid>
    {[Object.values(movies)][0].map(movie => (
      <Movie movie={movie} />
    ))}
  </Grid>
);

export default MovieGrid;
