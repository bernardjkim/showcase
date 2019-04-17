import React from 'react';
import styled from 'styled-components';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1080px;
`;

type LabelProps = TypographyProps & {
  private: number;
};

const Label = styled(Typography as React.SFC<LabelProps>)`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: ${props => (props.private ? 'red' : 'green')};
  margin-left: 10px;
  :hover {
    text-decoration: ${props => !props.private && 'underline'};
  }
`;

type Props = {
  github?: string;
  handleOpenRepo: () => void;
};

export const GitHub: React.FC<Props> = props => {
  const { github, handleOpenRepo } = props;
  return (
    <Container>
      <FontAwesomeIcon size="lg" icon={faGithub} />
      <Label onClick={handleOpenRepo} private={github ? 0 : 1}>
        {github || 'PRIVATE'}
      </Label>
    </Container>
  );
};
