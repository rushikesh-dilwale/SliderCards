import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

const cardData = [
  {
    title: 'Movie Name',
    description: 'Beauty And The Beast.',
    imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg',
  },
  {
    title: 'Movie Name',
    description: 'Black Panther.',
    imageUrl: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
  },
  {
    title: 'Movie Name',
    description: 'After.',
    imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180',
  },
  {
    title: 'Movie Name',
    description: 'Harry Potter.',
    imageUrl: 'https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/poster-for-movie.png',
  },
  {
    title: 'Movie Name',
    description: 'Freedom.',
    imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054',
  },
  {
    title: 'Movie Name',
    description: 'Iron Man.',
    imageUrl: 'https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg',
  },
  {
    title: 'Movie Name',
    description: 'Harry Potter.',
    imageUrl: 'https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg',
  },
];

const App = () => {
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop autoPlay>
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
