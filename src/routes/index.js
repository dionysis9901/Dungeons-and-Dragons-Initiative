import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// import AuthenticatedRoute from "./AuthenticatedRoute";
// import NonAuthenticatedRoute from "./NonAuthenticatedRoute";

// Load Routes dynamically for code splitting. Use webpackChunkName named chunks to better analyze the bundle size after building
// const DashboardRoute = lazy(() =>
//   import(/* webpackChunkName: "DashboardRoute" */ "routes/Dashboard")
// );

// const AccountRoute = lazy(() =>
//   import(/* webpackChunkName: "AccountRoute" */ "routes/Account")
// );

export const Home = lazy(() =>
  import(/* webpackChunkName: "Home1" */ "routes/Home")
);

export const AppRoutes = () => {
  return (
    // <Suspense>
    <Suspense fallback={null}>
      <Switch>
        <Route component={Home} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
