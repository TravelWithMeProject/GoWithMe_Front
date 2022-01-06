import React from 'react';
import Header from '@components/Header';
import { Route, RouteProps, Routes, useLocation } from 'react-router-dom';
import { Home, Covid, Travel, User, Community } from './router';

const Router = () => {
  const location = useLocation();
  const routerList: RouteProps[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/covid',
      element: <Covid />,
    },
    {
      path: '/travel',
      element: <Travel />,
    },
    {
      path: '/user',
      element: <User />,
    },
    {
      path: '/community',
      element: <Community />,
    },
  ];

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        {routerList.map((router, idx) => (
          <Route {...router} key={idx} />
        ))}
      </Routes>
    </>
  );
};

export default Router;
