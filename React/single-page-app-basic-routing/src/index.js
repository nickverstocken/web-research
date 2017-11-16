import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Layout';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>

            <Route path="/" component={App}></Route>

    </Router>
    , document.getElementById('root'));
registerServiceWorker();
