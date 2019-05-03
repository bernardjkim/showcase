import React from 'react';

import { AuthLink, SubmitLink } from 'Routes';

import { User } from 'types';
import { ActionsContainer, NavContent, StyledButton } from './components';

type Props = {
  user?: User;
  handleLogout: () => void;
};

const NavActions: React.SFC<Props> = props => {
  const { user, handleLogout } = props;
  return (
    <NavContent>
      <ActionsContainer>
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
      </ActionsContainer>
    </NavContent>
  );
};

export default NavActions;
