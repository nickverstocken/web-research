import React, {Component} from 'react';
import TodoListItem from './Todo-List-Item';

class TodoList extends Component {
    setCompleted(id){
       this.props.toggleComplete(id);
    }
    deleteTodo(id){
        this.props.deleteTodo(id);
    }
    updateTodo(todo){
        console.log(todo);
    }
    render() {
        const {todos } = this.props;
        const mappedTodos = todos.map((todo, i) => <TodoListItem key={i} editTodo={this.updateTodo.bind(this)} toggleComplete={this.setCompleted.bind(this)} deleteTodo={this.deleteTodo.bind(this)} completed={todo.completed} text={todo.text} id={todo.id}/>);
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <ul className="todo-list">
                    {mappedTodos}
                </ul>
            </section>
        );
    }
}
export default TodoList;
