import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from "redux-thunk";
import Reduxpromise from "redux-promise";
import Reducer from "./_reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk,Reduxpromise)(createStore)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<BrowserRouter>
			<Provider store={createStoreWithMiddleware(Reducer)}>
    		<App />
			</Provider>	
		</BrowserRouter>	
  </React.StrictMode>
);

