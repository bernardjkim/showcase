import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import { Loadable } from 'loadable-components';

import { makeSelectUser } from './selectors';

type Props = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    component: Loadable<any>;
    exact: boolean;
    path: string;
  };

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

const PrivateRoute: React.FC<Props> = props => {
  const { component, user, ...rest } = props;
  if (user) {
    return <Route component={component} {...rest} />;
  } else {
    return <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />;
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(PrivateRoute));
