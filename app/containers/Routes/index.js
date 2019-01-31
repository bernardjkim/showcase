/**
 *
 * Links
 *
 * Exports Link elements to all available containers.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HomeLink = props => <StyledLink to="/" {...props} />;

export const SubmissionLink = props => (
  <StyledLink to="/submission" {...props} />
);

export const LoginLink = props => <StyledLink to="/login" {...props} />;
