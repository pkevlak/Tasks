import React, {PureComponent} from 'react';
import Form from './Form';
import TodoItem from './TodoItem';
import Header from './Header';
import Filter from './Filter';

class App extends PureComponent {
  state = {
    todos: [],
    filter: 'all',
    search: ''
  }

  componentDidMount() {
    const state = JSON.parse(window.localStorage.getItem('state'));
    this.setState({todos: state === null ? [] : state});
  }

  componentDidUpdate() {
    const {todos} = this.state;
    window.localStorage.setItem('state', JSON.stringify(todos));
  }

  handleSubmitButton =
  (value) => {
    this.setState(({todos}) => ({todos: [value, ...todos]}));
  }

  handleDeleteTodo =
  (id) => {
    this.setState(({todos}) => ({todos: todos.filter(todo => todo.id !== id)}));
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
    this.setState({
      search: e,
    });
  }

  handleFilterActive = () => {
    this.setState({
      filter: 'active'
    });
  }

  handleFilterDone = () => {
    this.setState({
      filter: 'done'
    });
  }

  handleFilterAll = () => {
    this.setState({
      filter: 'all'
    });
  }

  render() {
    const {todos, filter, search} = this.state;
    let toShow;
    if (filter === 'active') {
      toShow = [...todos].filter(todo => todo.done === false);
    }
    if (filter === 'done') {
      toShow = [...todos].filter(todo => todo.done === true);
    }
    if (filter === 'all') {
      toShow = [...todos];
    }
    toShow = toShow.filter(todo => todo.todo.toLowerCase().includes(search.toLowerCase()));

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
          {toShow.map(todo => (
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
