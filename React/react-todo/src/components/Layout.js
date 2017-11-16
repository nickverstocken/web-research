import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoList from './Todo-List';
import { connect } from 'react-redux';
import '../App.css';
import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter, clearCompleted } from '../actions/TodoActions';
class Layout extends Component {
    addTodo(title){
        this.props.dispatch(addTodo(title));
    }
    toggleTodo(id){
        this.props.dispatch(toggleTodo(id));
    }
    deleteTodo(id){
        this.props.dispatch(deleteTodo(id));
    }
    applyFilter(filter){
        this.props.dispatch(setVisibilityFilter(filter));
    }
    clearComplete(){
        this.props.dispatch(clearCompleted());
    }
    render() {
        return (
            <section className="todoapp">
                <Header todoAdd={this.addTodo.bind(this)}/>
                <TodoList deleteTodo={this.deleteTodo.bind(this)} toggleComplete={this.toggleTodo.bind(this)} todos={this.props.todos}/>
                <Footer clearCompleted={this.clearComplete.bind(this)} hasCompleted={this.props.todos.some(todo => todo.completed === true)} count={this.props.count} applyFilter={this.applyFilter.bind(this)} />
            </section>
        );
    }
}
const applyFilter = (todos, filter) =>{
    switch (filter) {
        case 'completed': {
            return todos.filter(todo => todo.completed)
        }
        case 'active': {
            return todos.filter(todo => !todo.completed)
        }
        default : {
            return todos
        }
    }
}
const mapStateToProps = (state) => ({
    todos: applyFilter(state.todos, state.visibilityFilter),
    count: state.todos.filter((x,i) => { return x.completed === false; }).length
})
export default connect(mapStateToProps)(Layout);
