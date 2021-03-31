import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Carousel from './Carousel';
import Subscribe from './Subscribe';
import Carousel2 from './Carousel2';
import Cart from './Cart';
ReactDOM.render(
    <div>
    <Navbar />
    <Landing />
    <Carousel />
    <Subscribe /> 
    <Carousel2 />
    <Cart />
    </div>
  ,document.getElementById('root')
);

