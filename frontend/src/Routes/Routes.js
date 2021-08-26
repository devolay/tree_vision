import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { Typography } from "@material-ui/core";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const MainPage = lazy(() => import("../pages/MainPage/MainPage"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
