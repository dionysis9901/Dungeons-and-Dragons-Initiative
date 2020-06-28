import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// Load Routes dynamically for code splitting. Use webpackChunkName named chunks to better analyze the bundle size after building
const GameRoute = lazy(() =>
  import(/* webpackChunkName: "GameRoute" */ "routes/Game")
);

export const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound1" */ "routes/NotFound")
);

export const AppRoutes = () => {
  return (
    // <Suspense>
    <Suspense fallback={null}>
      <Switch>
        <Route path={"/"} component={GameRoute} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
