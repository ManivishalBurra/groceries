import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Carousel from './Carousel';
import Subscribe from './Subscribe';
import Carousel2 from './Carousel2';
ReactDOM.render(
    <div>
    <Navbar />
    <Landing />
    <Carousel />
    <Subscribe /> 
    <Carousel2 />
    </div>
  ,document.getElementById('root')
);

