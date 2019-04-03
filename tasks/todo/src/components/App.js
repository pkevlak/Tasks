import React, {PureComponent} from 'react';
import Form from './Form';
import TodoItem from './TodoItem';
import Header from './Header';
import Filter from './Filter';

class App extends PureComponent {
  state = {
    todos: [],
    todosShow: [],
  }

  componentDidMount() {
    const state = JSON.parse(window.localStorage.getItem('state'));
    this.setState({todos: state === null ? [] : state});
    this.setState({todosShow: state === null ? [] : state});
  }

  componentDidUpdate() {
    const {todos} = this.state;
    window.localStorage.setItem('state', JSON.stringify(todos));
  }

  handleSubmitButton =
  (value) => {
    document.getElementById('all').click();
    this.setState(({todos}) => ({todos: [value, ...todos], todosShow: [value, ...todos]}));
  }

  handleDeleteTodo =
  (id) => {
    this.setState(({todos}) => ({todos: todos.filter(todo => todo.id !== id)}));
    this.setState(({todosShow}) => ({todosShow: todosShow.filter(todo => todo.id !== id)}));
  }

  handleDoneButton = id => this.setState(({todos}) => ({
    todos: todos.map((element) => {
      if (element.id === id) {
        const todo = element;
        todo.done = !element.done;
      }
      return element;
    })
  }));

  handleStatusButton = id => this.setState(({todos}) => ({
    todos: todos.map((element) => {
      if (element.id === id) {
        const todo = element;
        todo.important = !element.important;
      }
      return element;
    })
  }));

  handleSearch = (e) => {
    if (e === '') {
      document.getElementById('all').click();
    } else {
      const {todosShow} = this.state;
      this.setState(({
        todosShow:
        todosShow.filter(todo => todo.todo.toLowerCase().includes(e.toLowerCase())),
      }));
    }
  }

  handleFilterActive = () => {
    const {todos} = this.state;
    this.setState(({
      todosShow:
      todos.filter(todo => todo.done === false)
    }));
  }

  handleFilterDone = () => {
    const {todos} = this.state;
    this.setState(({
      todosShow:
      todos.filter(todo => todo.done === true)
    }));
  }

  handleFilterAll = () => {
    const {todos} = this.state;
    this.setState(({
      todosShow: todos
    }));
  }

  render() {
    const {todosShow} = this.state;

    return (
      <div>
        <Header
          toggleSearch={this.handleSearch}
        />
        <Filter
          toggleFilterActive={this.handleFilterActive}
          toggleFilterDone={this.handleFilterDone}
          toggleFilterAll={this.handleFilterAll}
        />
        <Form
          onSubmit={this.handleSubmitButton}
        />
        <ul className="todos">
          {todosShow.map(todo => (
            <TodoItem
              key={todo.id}
              deleteTodo={this.handleDeleteTodo}
              toggleStatusButton={this.handleStatusButton}
              toggleDoneButton={this.handleDoneButton}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
