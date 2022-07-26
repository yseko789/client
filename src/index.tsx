import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import SearchPage from './components/SearchPage';

import {store} from './store'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);


