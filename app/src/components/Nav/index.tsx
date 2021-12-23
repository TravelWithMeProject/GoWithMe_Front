import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer } from './style';

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/counter">카운터</Link>
        </li>
        <li>
          <Link to="/covid">코로나</Link>
        </li>
        <li>
          <Link to="/nesting">중첩</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
