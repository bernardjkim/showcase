import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1080px;
`;

type LabelProps = TypographyProps & {
  private: boolean;
};
const Label = styled(Typography as React.SFC<LabelProps>)`
  font-size: 18px;
  font-weight: 100;
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
      <Label onClick={handleOpenRepo} private={!!github}>
        {github || 'private'}
      </Label>
    </Container>
  );
};
