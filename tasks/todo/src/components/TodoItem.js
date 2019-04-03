import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class TodoItem extends PureComponent {
    static propTypes = {
      todo: PropTypes.string.isRequired,
      deleteTodo: PropTypes.func.isRequired,
      toggleDoneButton: PropTypes.func.isRequired,
      toggleStatusButton: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      done: PropTypes.bool.isRequired
    }

    handleButtonClick = () => {
      const {deleteTodo, id} = this.props;
      deleteTodo(id);
    }

    handleImportantBut = () => {
      const {toggleStatusButton, id} = this.props;
      toggleStatusButton(id);
    }

    handleDoneTodo = () => {
      const {toggleDoneButton, id} = this.props;
      toggleDoneButton(id);
    }

    render() {
      const {todo, important, done} = this.props;

      return (
        <div>
          <div className="todosConteiner">
            <img src="star_border.png" alt="starIcon" className={important ? 'starIconVisible' : 'starIconHidden'} />
            <div className={done ? 'done' : 'liNorm'}>
              <li role="presentation" onClick={this.handleDoneTodo} className={important ? 'liImp' : 'liNorm'}><div className="todoSt">{todo}</div></li>
            </div>
            <button className="deleteButton" type="button" onClick={this.handleButtonClick}><img alt="delete" src="Delete.png" /></button>
            <button className={important ? 'notImportant' : 'important'} type="button" onClick={this.handleImportantBut}>{important ? 'Not important' : 'Mark important'}</button>
          </div>
          <br />
        </div>
      );
    }
}

export default TodoItem;
