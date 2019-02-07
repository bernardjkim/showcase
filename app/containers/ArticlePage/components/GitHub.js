import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1080px;
`;

const Label = styled(Typography)`
  font-size: 18px;
  font-weight: 100;
  color: ${props => (props.private ? 'red' : 'green')};
  margin-left: 10px;
  :hover {
    text-decoration: ${props => !props.private && 'underline'};
  }
`;

const GitHub = props => {
  /* state */
  const { github } = props;
  /* functions */
  const { handleOpenRepo } = props;

  return (
    <Container>
      <FontAwesomeIcon size="lg" icon={faGithub} />
      <Label onClick={handleOpenRepo} private={github ? 0 : 1}>
        {github || 'private'}
      </Label>
    </Container>
  );
};

GitHub.propTypes = {
  /* state */
  github: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /* functions */
  handleOpenRepo: PropTypes.func.isRequired,
};

export default GitHub;
