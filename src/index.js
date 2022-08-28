import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import MainContainer from './components/MainContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>
);
