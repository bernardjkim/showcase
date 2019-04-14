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

// TODO
// type Props = {};

export const HomeLink = (props: any) => <StyledLink to="/" {...props} />;

export const SubmitLink = (props: any) => (
  <StyledLink to="/submit" {...props} />
);

export const AuthLink = (props: any) => <StyledLink to="/auth" {...props} />;

export const SignupLink = (props: any) => (
  <StyledLink to="/signup" {...props} />
);

export const SearchLink = (props: any) => (
  <StyledLink to="/search" {...props} />
);

export const ArticleLink = (props: any) => (
  <StyledLink to="/article" {...props} />
);
