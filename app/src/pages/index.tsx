import React from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { Home, Counter, Covid } from "./router";

interface NestingRouterProps extends RouteProps {
  parentPath: string;
}

const Router = () => {
  console.log('test');
  const routerList: RouteProps[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/covid",
      element: <Covid />
    },
  ];

  const nestingRouterList: NestingRouterProps[] = [];

  return (
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
  );
};

export default Router;