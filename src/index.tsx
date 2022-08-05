import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import SearchPage from './components/SearchPage';
import CalculatePage from './components/CalculatePage';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

import {store} from './redux/store'
import AccountPage from './components/AccountPage';
import SubscriptionsPage from './components/SubscriptionsPage';

const errorLink = onError(({graphQLErrors, networkError})=>{
  if(graphQLErrors){
    graphQLErrors.map(({message, locations, path})=>{
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:3001/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client = {client}>
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<SearchPage/>}/>
          <Route path = '/register' element={<Register/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/logout' element={<Logout/>}/>
          <Route path = '/account' element={<AccountPage/>}/>
          <Route path = '/list'/>
          <Route path = '/subscriptions' element={<SubscriptionsPage/>}/>
          <Route path = '/calculate' element={<CalculatePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);


