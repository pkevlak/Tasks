import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Filter extends PureComponent {
    static propTypes = {
      toggleFilterActive: PropTypes.func.isRequired,
      toggleFilterDone: PropTypes.func.isRequired,
      toggleFilterAll: PropTypes.func.isRequired
    }

    state = {
      all: true,
      active: false,
      done: false
    }

    handleFilterActive = (e) => {
      const {toggleFilterActive} = this.props;
      toggleFilterActive();
      this.handleFocus(e);
    }

    handleFilterDone = (e) => {
      const {toggleFilterDone} = this.props;
      toggleFilterDone();
      this.handleFocus(e);
    }

    handleFilterAll = (e) => {
      const {toggleFilterAll} = this.props;
      toggleFilterAll();
      this.handleFocus(e);
    }

    handleFocus = (e) => {
      this.setState({all: false, active: false, done: false});
      this.setState({[e.target.name]: true});
    }

    render() {
      const {all, active, done} = this.state;

      return (
        <div className="filter">
          <button id="all" name="all" className={all ? 'activeBut' : 'filtreBut'} type="button" onClick={this.handleFilterAll}>All</button>
          <button name="active" className={active ? 'activeBut' : 'filtreBut'} type="button" onClick={this.handleFilterActive}>Active</button>
          <button name="done" className={done ? 'activeBut' : 'filtreBut'} type="button" onClick={this.handleFilterDone}>Done</button>
        </div>
      );
    }
}

export default Filter;
