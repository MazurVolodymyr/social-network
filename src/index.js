import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './redux/state'


let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App 
      state = { state } addPost = { store.addPost.bind(store) } 
      changePostBLL= { store.changePostBLL.bind(store) }/>
  </React.StrictMode>
    );
};
rerenderEntireTree(store.getState());

store.Subscribe(rerenderEntireTree);

reportWebVitals();
