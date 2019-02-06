import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { AuthLink, SubmitLink } from 'containers/Routes';

import NavContent from './components/NavContent';

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  font-weight: 300;
`;

const NavActions = props => {
  /* state */
  const { user } = props;

  /* functions */
  const { handleLogout } = props;

  return (
    <NavContent>
      <Actions>
        <StyledButton color="primary" component={SubmitLink}>
          Submit +
        </StyledButton>
        {user ? (
          <StyledButton onClick={handleLogout} color="primary">
            Logout
          </StyledButton>
        ) : (
          <StyledButton component={AuthLink} color="primary">
            Login
          </StyledButton>
        )}
      </Actions>
    </NavContent>
  );
};

NavActions.propTypes = {
  /* state */
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /* functions */
  handleLogout: PropTypes.func.isRequired,
};

export default NavActions;
