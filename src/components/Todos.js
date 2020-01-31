import React, { Component } from 'react'

export class Todos extends Component {
	render() {
		const listTodos = this.props.todos.length ? (
			this.props.todos.map(todo => {
				return (
					<div className="collection-item" key={todo.id}>
						<span onClick={() => {this.props.deleteTodo(todo.id)}}>{todo.content}</span>
					</div>
				)
			})		) : (
			<p>No Todo's</p>
		)

		return (
			<div className="todos collection">
				{listTodos}
			</div>
		)
	}
}

export default Todos
