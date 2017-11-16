import React, { Component } from 'react';
import logo from '../logo.svg';
import './Layout.css';
import { connect } from 'react-redux';
import { fetchUser } from "../actions/Useractions"
import {fetchTweets} from "../actions/TweetsActions";
class App extends Component {
    componentWillMount(){
        this.props.dispatch(fetchUser());
    }
    fetchTweets(event){
        this.props.dispatch(fetchTweets());
    }
    render() {
        const {user, tweets } = this.props;
        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)} >Load tweets</button>
        }
        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome {user.name}</h1>
                </header>
                <p className="App-intro">
                    <ul>
                        {mappedTweets}
                    </ul>
                </p>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    }
})(App);
