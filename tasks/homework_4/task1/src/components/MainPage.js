import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  state = {
    counter: 0
  }

  handleButtonIncreaseClick = () => {
    this.setState(({counter}) => ({counter: ++counter}));
  }

  handleButtonDecreaseClick = () => {
    this.setState(({counter}) => ({counter: --counter}));
  }

  render() {
    return (
      <div className = "main">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleButtonIncreaseClick}>Increase</button>
        <button onClick={this.handleButtonDecreaseClick}>Decrease</button>
      </div>
    );
  }
}

export default MainPage;
