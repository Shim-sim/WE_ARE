import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter, HashRouter  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from "redux-thunk";
import Reduxpromise from "redux-promise";
import Reducer from "./_reducers";
import './index.css';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk,Reduxpromise)(createStore)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Provider store={createStoreWithMiddleware(Reducer)}>
    		<App />
		</Provider>	
	</BrowserRouter>	
);

