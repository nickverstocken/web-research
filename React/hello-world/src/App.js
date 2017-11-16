import React, {Component} from 'react';
import './App.css';
import './Header/Header';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

class App extends Component {
    constructor(){
        super();
        this.state = {title: "User"}
    }
    changeTitle(text){
        this.setState({title: text});
    }
    render() {
        return (
            <div className="App">
                <Header  title={this.state.title}/>
                <Body changeTitle={this.changeTitle.bind(this)} />
                <Footer/>
            </div>
        );
    }
}

export default App;
