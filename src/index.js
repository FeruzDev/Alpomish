import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/main.css"
import "./css/fonts.css"
import "./css/style.css"
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/reducer/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
//
// const store = createStore(rootReducer, compose(applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

