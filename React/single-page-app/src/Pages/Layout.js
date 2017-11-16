import React, { Component } from 'react';
import '../index.css';
import Header from "../Components/Header/Header";
import {Route, Switch} from 'react-router-dom';
import Featured from "./Featured";
import Archived from "./Archived";
import Settings from "./Settings";
class App extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div className="container">

                <div>
                    <Switch>
                        <Route path='/archives/:article' component={Archived} />
                        <Route path='/archives' component={Archived} />
                    </Switch>
                    <Route path='/settings' component={Settings} />
                    <Route path='/featured' component={Featured} />
                    <Route exact={true} path='/' component={Featured} />
                </div>
            </div>
            </div>
        );
    }
}
export default App;
