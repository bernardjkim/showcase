/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

/* Utils */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* Locals */
import reducer from './reducer';
import saga from './saga';
import makeSelectProfilePage from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <div>test</div>
      </div>
    );
  }
}

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
