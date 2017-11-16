import React, { Component } from 'react';
import './Header.css';
import {NavLink, withRouter} from 'react-router-dom';
class Header extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: true
        }
    }
    toggleClass(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const { collapsed } = this.state;
        const { pathname } = this.props.location;
        const navClass = collapsed ? "collapse":'';
        const homeClass = pathname === '/' ? 'active':'';
        const featuredClass = pathname.match(/^\/featured/) ? 'active':'' ;
        const archivesClass = pathname.match(/^\/archives/) ? 'active':'' ;
        const settingsClass =  pathname.match(/^\/settings/) ? 'active':'';
        return (
            <header>
                <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <NavLink to="/" className="navbar-brand" href="#">Single Page App</NavLink>
                            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleClass.bind(this)} data-toggle="collapse" data-target="#navbarContent" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                    <div className={"navbar-collapse "+navClass} id="navbarContent">
                        <ul className="nav navbar-nav">
                            <li className={homeClass} onClick={this.toggleClass.bind(this)} ><NavLink exact to="/">Home</NavLink></li>
                            <li className={archivesClass} onClick={this.toggleClass.bind(this)} ><NavLink  to="/archives">Archives</NavLink></li>
                            <li className={featuredClass} onClick={this.toggleClass.bind(this)} ><NavLink  to="/featured">Featured</NavLink></li>
                            <li className={settingsClass} onClick={this.toggleClass.bind(this)} ><NavLink  to="/settings">Settings</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default withRouter(Header);