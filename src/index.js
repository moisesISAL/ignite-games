import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Redux Setup
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux' //mdlware basically checks on every action that is being dispatched, and is gonna be processed thru the mdlware 
import rootReducer from './reducers' //compose is used to merge some components
import {Provider} from 'react-redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //The simpliest way to understand this is that this is necessary to apply async to our redux.
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))); 

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
