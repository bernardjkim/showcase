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

export const SubmitLink = props => <StyledLink to="/submit" {...props} />;

export const AuthLink = props => <StyledLink to="/auth" {...props} />;

export const SignupLink = props => <StyledLink to="/signup" {...props} />;
