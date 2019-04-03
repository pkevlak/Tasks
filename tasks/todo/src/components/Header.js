import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
    static propTypes = {
      toggleSearch: PropTypes.func.isRequired,
    }

    state = {
      search: ''
    }

    handleSearch = (e) => {
      const {toggleSearch} = this.props;
      toggleSearch(e.target.value);
    }

    handleChangeInput = e => this.setState({[e.target.name]: e.target.value})

    render() {
      const {search} = this.state;

      return (
        <div>
          <img className="logo" alt="logo" src="logo.png" />
          <form onChange={this.handleSearch}>
            <div className="searchConteiner">
              <img alt="searchIcon" src="../Search.png" className="searchIcon" />
              <input
                className="search"
                value={search}
                name="search"
                onChange={this.handleChangeInput}
                type="text"
                placeholder="Search task for to do"
              />
            </div>
          </form>
        </div>
      );
    }
}

export default Header;
