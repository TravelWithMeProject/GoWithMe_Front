import Header from '@components/Header';
import React from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { Home, Covid, Travel, User, Community } from './router';

interface NestingRouterProps extends RouteProps {
  parentPath: string;
}

const Router = () => {
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

  const nestingRouterList: NestingRouterProps[] = [];

  return (
    <>
      <Header />
      <Routes>
        {routerList.map((router, idx) => (
          <Route {...router} key={idx}>
            <>
              {nestingRouterList.map((nestRouter, idx) => {
                const { parentPath, ...rest } = nestRouter;

                if (parentPath === router.path) {
                  return <Route {...rest} key={idx} />;
                }
              })}
            </>
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default Router;
