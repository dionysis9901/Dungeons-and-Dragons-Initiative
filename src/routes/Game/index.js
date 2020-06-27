import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainLayout from "layouts/Game";
// import { Loader } from "components";

const HomeRoute = lazy(() =>
  import(/* webpackChunkName: "HomeRoute" */ "routes/Game/Home")
);

const NotFoundRoute = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "routes/NotFound")
);

export const Game = () => {
  const match = useRouteMatch();
  return (
    <MainLayout>
      <Suspense>
        <Switch>
          <Route path={`${match.url}`} component={HomeRoute} exact />
          <Route component={NotFoundRoute} />
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default Game;
