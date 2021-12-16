import React from 'react';
import { ParentNestingContainer } from './style';
import { Link, Outlet } from 'react-router-dom';

const ParentNesting = () => {
  return (
    <ParentNestingContainer>
      <ul>
        <li><Link to="ssi02014">중첩 라우팅 링크[부모]</Link></li>
      </ul>
      <Outlet />
    </ParentNestingContainer>
  );
};

export default ParentNesting;