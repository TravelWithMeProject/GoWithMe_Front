import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ParentNesting = () => {
  return (
    <div>
      <ul>
        <li><Link to="ssi02014">중첩 라우팅</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ParentNesting;