const express = require('express');
const rp = require('request-promise');
const $ = require('cheerio');
const BASE_URL = 'https://www.imdb.com';
const CALL_URL = 'https://www.imdb.com/chart/top';
const PORT = process.env.PORT || 4000;

const movies = [];
const error = {
  valid: false,
  err: ''
};

const app = express();
rp(CALL_URL)
  .then(html => {
    const allMovies = [$('tr', html)];
    const moviesArr = Object.values(allMovies[0]);

    moviesArr.forEach(film => {
      const movie = {
        title: $('.titleColumn > a', film).text(),
        picture: $('.posterColumn > a > img', film).attr('src'),
        rating: $('.ratingColumn > strong', film).text(),
        link: `${BASE_URL}${$('.titleColumn > a', film).attr('href')}`,
        release: $('.titleColumn > span', film).text()
      };
      return movies.push(movie);
    });
  })

  .catch(err => {
    error = {
      valid: true,
      err
    };
  });

const cleanUp = arr => arr.slice(1, arr.length - 5);

app.listen(PORT, () => {
  console.log(`The Server is running on Port ${PORT}`);
});

app.get('/', (req, res) => {
  const mail = error.valid ? error.msg : cleanUp(movies);
  res.send(mail);
});
