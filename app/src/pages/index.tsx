import React from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { Home, Counter, ParentNesting, ChildNesting, Covid } from "./router";

interface NestingRouterProps extends RouteProps {
  parentPath: string;
}

const Router = () => {
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
    {
      path: "/nesting/*",
      element: <ParentNesting />
    },
  ];

  const nestingRouterList: NestingRouterProps[] = [
    {
      parentPath: "/nesting/*",
      path: ":id",
      element: <ChildNesting />
    }
  ];

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