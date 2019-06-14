import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,compose, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import thunk  from 'redux-thunk'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginform'
import signupform from './reducers/signupform'
//add a reducer  this is just stupped for now 

const reducer = combineReducers({
    users,
    currentUser,
  loginForm,
  signupform 
  }
) 
//add a reducer  and 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
