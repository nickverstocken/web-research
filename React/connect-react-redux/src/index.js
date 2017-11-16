import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('root'));
registerServiceWorker();
