import GlobalStyle from '@styles/global';
import React from 'react';
import { Link } from 'react-router-dom';
import Router from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router />
      </div>
    </>
  );
}

export default App;
