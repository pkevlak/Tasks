import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import guid from '../utils';

class Form extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    todo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {onSubmit} = this.props;
    const {todo} = this.state;
    const result = {
      id: guid(),
      important: false,
      done: false,
      todo
    };

    onSubmit(result);
    this.setState({todo: ''});
  }

  handleChangeInput = e => this.setState({[e.target.name]: e.target.value})

  render() {
    const {todo} = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <p className="nwTask">New Task</p>
        <textarea
          className="areaInput"
          value={todo}
          name="todo"
          maxLength="100"
          onChange={this.handleChangeInput}
        />
        <br />
        <button className="addBut" type="submit" disabled={todo.length === 0}>Add</button>
      </form>
    );
  }
}

export default Form;
