import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router";

const MarketPlace = React.lazy(() => import("@/pages/marketPlace"));
const MarkDetail = React.lazy(() => import("@/pages/markDetail"));
const Drops = React.lazy(() => import("@/pages/drops"));
const Artworks = React.lazy(() => import("@/pages/artworks"));

const RouteList = () => {
  return (
    <Switch>
      <Route path="/marketPlace" exact component={MarketPlace} />
      <Route path="/marketPlace/:id" component={MarkDetail} />
      <Route path="/drops" component={Drops} />
      <Route path="/artworks" component={Artworks} />
      <Redirect to="/marketPlace" />
    </Switch>
  );
};

export default withRouter(RouteList);
