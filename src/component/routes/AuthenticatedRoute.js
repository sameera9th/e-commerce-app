import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/product_dashboard';

export default ({ component: C, props: cProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <div>
            <Dashboard>
              <C {...props} {...cProps} />
            </Dashboard>
          </div>
        );
      }}
    />
  );
};
