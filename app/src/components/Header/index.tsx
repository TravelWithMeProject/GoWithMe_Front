import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderWrapper } from './style';

const MenuData = [
  {
    name: '내 여행 일정',
    to: '/travel',
  },
  {
    name: '커뮤니티',
    to: '/community',
  },
  {
    name: '마이페이지',
    to: '/user',
  },
];
const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul>
        {MenuData.map((menu, idx) => (
          <Link
            className={location.pathname === menu.to ? 'active' : ''}
            to={menu.to}
            key={idx}
          >
            <li>{menu.name}</li>
          </Link>
        ))}
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
