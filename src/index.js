import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Carousel from './Carousel';
import Subscribe from './Subscribe';
ReactDOM.render(
    <div>
    <Navbar />
    <Landing />
    <Carousel />
    <Subscribe /> 
    <Carousel />
    </div>
  ,document.getElementById('root')
);

