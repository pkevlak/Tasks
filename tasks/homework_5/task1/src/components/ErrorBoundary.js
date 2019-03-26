import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error, info) {
    console.log('info', info);
    console.log('error', error);

    this.setState({error});
  }

  render() {
    const {error} = this.state;
    const {children} = this.props;

    return (
      error
        ? <p>Something went wrong, sorry.</p>
        : children

    )
  }
}

export default ErrorBoundary
