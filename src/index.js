import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';


const Feeling = (state = 0, action) => {
    if (action.type === 'FEELING') {
        return action.payload
    }
    return state;
}

const Understanding = (state = 0, action) => {
    if (action.type === 'UNDERSTANDING') {
        return  action.payload
    }
    return state;
}

const Supported = (state = 0, action) => {
    if (action.type === 'SUPPORTED') {
        return action.payload
    }
    return state;
}

const Comments = (state = '', action) => {
    if (action.type === 'COMMENTS') {
        return action.payload
    }
    return state;
}

// const Review = (state = '', action) => {
//     return state;
// }

// const reducer = (state = {feeling: 0, understanding: 0, support: 0, comments: ''}, action) =>{
//     if (action.type === 'FEELING') {
//         return {...state, feeling: action.payload}
//     }
//     return state;
// }

const store = createStore(
    combineReducers({
        //REDUCERS GO HERE
        Feeling,
        Understanding,
        Supported,
        Comments,
        // Review,
        // reducer
    }),
    applyMiddleware(logger)
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();