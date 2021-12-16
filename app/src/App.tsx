import GlobalStyle from '@styles/global';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Router from './pages';

// https://api.covid19api.com/live/country/korea-south/status/confirmed
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
