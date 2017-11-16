import React, { Component } from 'react';
import './Body.css';
class Body extends Component {
    handleChange(event) {
        const title = event.target.value;
        this.props.changeTitle(title);
    }
    render() {
        return (
            <p className="App-intro">
               <input onChange={this.handleChange.bind(this)} />
            </p>
        );
    }
}
export default Body;