/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import makeSelectSubmissionPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  margin-top: 40px;
  width: 60%;
`;

const ButtonSubmit = styled(Button)`
  margin-top: 40px;
  width: 60%;
  margin-bottom: 40px;
  background-color: #9bded2;
  color: white;
  font-weight: 400;
`;

const Header = styled(Typography)`
  margin-top: 40px;
  font-size: 40px;
  font-weight: 200;
`;

const ScreenShot = styled.img`
  margin-top: 40px;
  height: 400px;
`;
const ScreenShotBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 60%;
  height: 400px;
  background-color: #e8eaea;
`;

const ScreenShotLabel = styled(Typography)`
  font-size: 24px;
  font-weight: 300;
  color: #a9caca;
  margin-bottom: 10px;
`;

const InputFile = styled.input`
  display: none;
`;

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      github: '',
      description: '',
      tags: '',
      screenshot: false,
    };
  }

  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  handleFileUpload = event => {
    // this.setState({ screenshot: event.target.files[0] });
    this.setState({
      screenshot: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    return (
      <Container>
        <Header>Submit A Website!</Header>
        <StyledTextField
          label="Title"
          required
          onChange={this.handleChange('title')}
          value={this.state.title}
        />
        <StyledTextField
          label="URL"
          required
          onChange={this.handleChange('url')}
          value={this.state.url}
        />
        <StyledTextField
          label="GitHub"
          onChange={this.handleChange('github')}
          value={this.state.github}
        />
        <StyledTextField
          label="Description"
          required
          multiline
          rows={6}
          onChange={this.handleChange('description')}
          value={this.state.description}
        />
        <StyledTextField
          label="Tags"
          onChange={this.handleChange('tags')}
          value={this.state.tags}
        />

        {this.state.screenshot ? (
          <ScreenShot src={this.state.screenshot} alt="ScreenShot" />
        ) : (
          <ScreenShotBox>
            <InputFile type="file" onChange={this.handleFileUpload} />
            <ScreenShotLabel>Upload ScreenShot</ScreenShotLabel>
            <FontAwesomeIcon size="3x" color="#a9caca" icon={faPlusCircle} />
          </ScreenShotBox>
        )}

        <ButtonSubmit variant="contained">Submit</ButtonSubmit>
      </Container>
    );
  }
}

SubmissionPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  submissionPage: makeSelectSubmissionPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submissionPage', reducer });
const withSaga = injectSaga({ key: 'submissionPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubmissionPage);
