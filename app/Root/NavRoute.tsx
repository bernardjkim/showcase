import React from 'react';

import { Loadable } from 'loadable-components';
import { Route } from 'react-router-dom';

import Nav from 'containers/Nav';
type Props = {
  component: Loadable<any>;
  exact: boolean;
  path: string;
};

const NavRoute: React.FC<Props> = props => {
  const { component, ...rest } = props;

  return (
    <React.Fragment>
      <Nav />
      <Route component={component} {...rest} />
    </React.Fragment>
  );
};

export default NavRoute;
