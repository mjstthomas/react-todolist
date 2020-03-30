import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import Form from './Form'
import todosData from './todosData.js';


class App extends React.Component {
 state = {
      todos: todosData,
    }


  handleSubmit = value => {
    const newTodos = this.state.todos.concat({
          id: this.state.todos.length + 1,
          text: value,
          completed: false,
          remove: false
        })
    this.setState({
        todos: newTodos
      })
  }
  handleChange = id => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    handleClick = id => {
      this.setState(prevState => {
        const newTodo = prevState.todos.map(todo => {
          if (todo.id === id){
            todo.remove = true
          }
          return todo
        })
        return {
          todos: newTodo
        }
      })
    }

  render(props){
    const todoItems = this.state.todos.map(item => {
      return (item.remove == false ? <TodoItem key={item.id} item={item} handleChange={this.handleChange} handleClick= {this.handleClick}/> : null)
    })
    console.log(this.state.todos)
    return (
      <div className='todo-list'>
        <Form handleSubmit={this.handleSubmit} />
        {todoItems}
      </div>
    );
  }
}

export default App;
