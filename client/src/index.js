import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import {Switch} from "react-router-dom";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(state.categoryReducer);
});


ReactDOM.render(
<Provider store={store}>
    <App className="container" />
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
