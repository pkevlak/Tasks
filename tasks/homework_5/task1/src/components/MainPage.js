import React, { PureComponent } from 'react';
import Fruits from './Fruits';
import ErrorBoundary from './ErrorBoundary';
import '../index.css';


class MainPage extends PureComponent {

  state = {
    counter: 0,
    arr: ['Apple', 'Banana', 'Orange']
  }

  handleButtonIncreaseClick = () => {
    this.setState(({counter}) => ({counter: ++counter}));
  }

  handleButtonDecreaseClick = () => {
    this.setState(({counter}) => ({counter: --counter}));
  }

  render() {
    const {counter, arr} = this.state;
    return (
      <div className = "main">
        <h1>{counter}</h1>
        <button onClick={this.handleButtonIncreaseClick}>Increase</button>
        <button onClick={this.handleButtonDecreaseClick}>Decrease</button>
        <ErrorBoundary>
        <Fruits fruits={arr} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default MainPage;
