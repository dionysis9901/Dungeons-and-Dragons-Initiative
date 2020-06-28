import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainLayout from "layouts/Game";
// import { Loader } from "components";

const SettingsRoute = lazy(() =>
  import(/* webpackChunkName: "SettingsRoute" */ "routes/Game/Settings")
);

const PlayRoute = lazy(() =>
  import(/* webpackChunkName: "GameRoute" */ "routes/Game/Play")
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
          <Route path={`${match.url}`} component={SettingsRoute} />
          <Route path={`${match.url}/Settings`} component={SettingsRoute} />
          <Route path={`${match.url}/Play`} component={PlayRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default Game;
