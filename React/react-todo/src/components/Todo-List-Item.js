import React, {Component} from 'react';
import PropTypes from 'prop-types'
class TodoListItem extends Component {
    constructor(){
        super();
        this.state = {editing: false};
        this.state = {editValue: ''};
    }
    toggleCompletion = () => {
        this.props.toggleComplete(this.props.id);
    }
    deleteTodo = () => {
        this.props.deleteTodo(this.props.id);
    }
    startEdit(event){
        console.log(event);
        console.log('start edit');
        this.setState({editing: true});
        this.setState({editValue: event});
    }
    stopEditing(event){
        if(event.keyCode === 13){
            if(event.target.value.length){
                console.log('Edit todo ' + event.target.value);
                this.setState({editing: false});
                return;
            }
        }
        if(event.keyCode === 27){
            this.setState({editing:false});
            return;
        }
    }
    handleBlur(e){
        this.setState({editing: true});
    }
    render() {
        return (
            <li className={this.props.completed ? 'item completed' : 'item'}>
                {!this.state.editing ? <div className="view">
                        <input className="toggle" type="checkbox" checked={this.props.completed} onChange={() => {
                        }} onClick={this.toggleCompletion.bind(this)}/>
                        <label onDoubleClick={this.startEdit.bind(this, this.props.text)}>{this.props.text}</label>
                        <button onClick={this.deleteTodo.bind(this)} className="destroy"></button>
                    </div>
                    :
                    <div>
                    <input className = "edit" value={this.state.editValue} onBlur={this.handleBlur.bind(this)} onKeyUp={this.stopEditing.bind(this)} onChange={() => {
                    }} />
                    </div>
                }
            </li>
        );
    }
}
TodoListItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default TodoListItem;
