import React, { Component } from 'react';
import '../index.css';
import {NavLink, withRouter} from 'react-router-dom';
class Header extends Component {
    constructor() {
        super();
    }
    navigate(){
        this.props.history.push('/featured');
    }
    render() {
        const { history } = this.props;
        console.log(this.props);
        return (
            <header>
                <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Single Page App</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/archives">Archives</NavLink></li>
                            <li><NavLink activeClassName="active" to="/featured">Featured</NavLink></li>
                            <li><NavLink activeClassName="active" to="/settings">Settings</NavLink></li>
                        </ul>
                </nav>
            </header>
        );
    }
}
export default withRouter(Header);