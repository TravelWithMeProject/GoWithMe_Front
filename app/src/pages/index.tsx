import React from 'react';
import Header from '@components/Header';
import { Route, RouteProps, Routes, useLocation } from 'react-router-dom';
import {
  Home,
  Covid,
  TravelPlan,
  User,
  Community,
  FindId,
  FindPassword,
} from './router';

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
      element: <TravelPlan />,
    },
    {
      path: '/user',
      element: <User />,
    },
    {
      path: '/community',
      element: <Community />,
    },
    {
      path: '/find/id',
      element: <FindId />,
    },
    {
      path: '/find/password',
      element: <FindPassword />,
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
