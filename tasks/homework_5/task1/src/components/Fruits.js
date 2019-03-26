import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

class Fruits extends PureComponent {

  static propTypes = {
       fruits: PropTypes.array.isRequired
     }

  render() {
    const { fruits } = this.props;
    return (
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    )
  }
}

export default Fruits;
