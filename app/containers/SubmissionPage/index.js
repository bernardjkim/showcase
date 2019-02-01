/**
 *
 * SubmissionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import uuid from 'uuid/v1';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import makeSelectSubmissionPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { submitForm } from './actions';

import {
  ButtonSubmit,
  Container,
  Header,
  InputFile,
  ScreenShot,
  ScreenShotBox,
  ScreenShotLabel,
  StyledTextField,
} from './components';

const TagsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin-top: 25px;
`;

/* eslint-disable react/prefer-stateless-function */
export class SubmissionPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        url: '',
        github: '',
        description: '',
        tag: '', // current input
        tags: [],
        screenshot: false,
      },
    };
  }

  handleChange = field => e => {
    const { form } = this.state;
    this.setState({ form: { ...form, [field]: e.target.value } });
  };

  handleFileUpload = e => {
    const { form } = this.state;
    this.setState({ form: { ...form, screenshot: e.target.files[0] } });
  };

  handleAddTag = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { form } = this.state;
      const { tags } = form;
      tags.push(form.tag);
      this.setState({ form: { ...form, tag: '', tags } });
    }
  };

  render() {
    const { handleSubmitForm } = this.props;
    return (
      <Container>
        <Header color="primary">Submit A Website!</Header>
        <StyledTextField
          InputProps={{ color: '#57c1ae' }}
          label="Title"
          required
          onChange={this.handleChange('title')}
          value={this.state.form.title}
        />
        <StyledTextField
          label="URL"
          required
          onChange={this.handleChange('url')}
          value={this.state.form.url}
        />
        <StyledTextField
          label="GitHub"
          onChange={this.handleChange('github')}
          value={this.state.form.github}
        />
        <StyledTextField
          label="Description"
          required
          multiline
          rows={6}
          onChange={this.handleChange('description')}
          value={this.state.form.description}
        />
        <StyledTextField
          label="Tags"
          onChange={this.handleChange('tag')}
          onKeyPress={this.handleAddTag}
          value={this.state.form.tag}
        />
        <TagsList>
          {this.state.form.tags.map(tag => (
            <Chip key={uuid()} label={tag} />
          ))}
        </TagsList>

        {this.state.form.screenshot ? (
          <ScreenShot
            src={URL.createObjectURL(this.state.form.screenshot)}
            alt="ScreenShot"
          />
        ) : (
          <ScreenShotBox>
            <InputFile type="file" onChange={this.handleFileUpload} />
            <ScreenShotLabel>Upload ScreenShot</ScreenShotLabel>
            <FontAwesomeIcon size="3x" color="#a9caca" icon={faPlusCircle} />
          </ScreenShotBox>
        )}

        <ButtonSubmit
          color="primary"
          variant="contained"
          onClick={() => handleSubmitForm(this.state.form)}
        >
          Submit
        </ButtonSubmit>
      </Container>
    );
  }
}

SubmissionPage.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  submissionPage: makeSelectSubmissionPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmitForm: data => {
      const { tag, ...form } = data;
      dispatch(submitForm(form));
    },
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
