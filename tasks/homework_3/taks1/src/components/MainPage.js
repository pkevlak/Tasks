import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const MainPage = ({name, isCat, isGoodWeather}) => {
  return (
    <main className='main'>
    <h1 className='greetings'>Hello, {name}</h1>
    <img className='image' src={isCat ? 'cat.jpg' : 'dog.png'}></img>
    {isGoodWeather && <h1>Weather is fine today</h1>}
    </main>)

}

MainPage.propTypes = {
  name: PropTypes.string,
  isCat: PropTypes.bool,
  isGoodWeather: PropTypes.bool
}

export default MainPage;
