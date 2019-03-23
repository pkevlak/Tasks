import React from 'react';
import Header from './Header';
import Footer from './Footer'
import MainPage from './MainPage'
import '../index.css';

const App = () => (
  <div className = 'wrapper'>
    <Header/>
    <MainPage/>
    <Footer/>
  </div>
);

export default App;
