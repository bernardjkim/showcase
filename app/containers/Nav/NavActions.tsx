import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { AuthLink, SubmitLink } from 'Routes';

import NavContent from './components/NavContent';

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  font-weight: 300;
` as typeof Button;

type Props = {
  user?: object;
  handleLogout: () => void;
};

const NavActions: React.FC<Props> = props => {
  const { user, handleLogout } = props;
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

export default NavActions;
