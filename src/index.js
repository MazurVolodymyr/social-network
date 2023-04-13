import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { changePostBLL } from './redux/state';
import { Subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
  <React.StrictMode>
    <App state = { state } addPost = { addPost }  changePostBLL= { changePostBLL }/>
  </React.StrictMode>
    );
};
rerenderEntireTree(state);

Subscribe(rerenderEntireTree);

reportWebVitals();
