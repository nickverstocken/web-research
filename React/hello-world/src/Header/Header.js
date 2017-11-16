import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';
class Header extends Component {
    render() {
        return (
                <header className="head">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Hello {this.props.title}</h1>
                </header>
        );
    }
}
export default Header;