import React, { Component } from 'react';

class TodoItem extends Component {
  deleteTodo(id){
    this.props.onDelete(id);
  }

  render() {
    console.log(this.props);
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.proptypes ={
  todos: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default TodoItem;
