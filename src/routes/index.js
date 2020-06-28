import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainLayout from "layouts/Game";

// import { Loader } from "components";

const SettingsRoute = lazy(() =>
  import(/* webpackChunkName: "SettingsRoute" */ "routes/Settings")
);

const PlayRoute = lazy(() =>
  import(/* webpackChunkName: "GameRoute" */ "routes/Play")
);

const NotFoundRoute = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "routes/NotFound")
);

export const AppRoutes = () => {
  const match = useRouteMatch();
  return (
    // <Suspense>
    <MainLayout>
      <Suspense fallback={null}>
        <Switch>
          <Route path={"/"} exact component={SettingsRoute} />
          <Route path={"/Settings/"} component={SettingsRoute} />
          <Route path={"/Play/"} component={PlayRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default AppRoutes;
