import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ul>
        <li><Link to="/counter">카운터</Link></li>
        <li><Link to="/news">뉴스</Link></li>
        <li><Link to="/nesting">중첩</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;