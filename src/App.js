import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddForm'

export class App extends Component {
	state = {
		todos: [
			{id: 1, content: 'todos 1'},
			{id: 2, content: 'todos 2'},
		]
	}

	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id
		})
		this.setState({
			todos
		})
	} 

	addTodo = (todo) => {
		todo.id = Math.random()
		let todos = [...this.state.todos, todo]
		this.setState({
			todos: todos
		})
	}

	render() {
		return (
			<div className="todo-app container">
				 <h1 className="center blue-text">Todo's</h1>
					<AddTodo addTodo={this.addTodo}/>
					<Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
			</div>
		)
	}
}

export default App

