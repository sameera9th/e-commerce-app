import React from "react";
import { Route, Switch } from "react-router-dom";
import AsyncComponent from "./component/routes/AsyncComponent";
import AuthenticatedRoute from "./component/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./component/routes/UnauthenticatedRoute";
const AsyncPageNotFount = AsyncComponent(() =>
  import("./component/pages/page_not_found")
);
const AsyncDashboard = AsyncComponent(() =>
  import("./component/pages/product_dashboard")
);
const AsyncProductDetails = AsyncComponent(() =>
  import("./component/pages/product_detail")
);

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute
      path="/product-dashboard"
      exact
      component={AsyncDashboard}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/product-details"
      component={AsyncProductDetails}
      props={childProps}
    />
    <Route component={AsyncPageNotFount} />
  </Switch>
);
