import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//redux store
import {store} from './reducer/store.js';

//components
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
