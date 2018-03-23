import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore,combineReducers} from 'redux';
import {productsReducer} from './reducers/products-reducer';
import {userReducer} from './reducers/user-reducer';
const appReducers = combineReducers({
    products:productsReducer,
    user:userReducer,
})
const store = createStore(appReducers,
    {
        products:[{name:'iphone'}],
        user:'mouadh akrout'
    },
    window.devToolsExtension && window.devToolsExtension()

    );
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
