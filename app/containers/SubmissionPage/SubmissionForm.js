/**
 *
 * SubmissionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

import TagList from './components/TagList';
import InputImage from './components/InputImage';
import SubmitButton from './components/SubmitButton';

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledTextField = styled(TextField)`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;

  label {
    color: #57c1ae;
    font-size: 17px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class SubmissionForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        uri: '',
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
    if (e.key === 'Enter' && this.state.form.tag !== '') {
      e.preventDefault();
      const { form } = this.state;
      const tags = [...form.tags, form.tag];
      this.setState({ form: { ...form, tag: '', tags } });
    }
  };

  handleDeleteTag = tag => () => {
    this.setState(state => {
      const tags = [...state.form.tags];
      const tagToDelete = tags.indexOf(tag);
      tags.splice(tagToDelete, 1);

      return { form: { ...state.form, tags } };
    });
  };

  render() {
    /* state */
    const { loadingSubmit } = this.props;
    /* functions */
    const { handleSubmitForm } = this.props;

    return (
      <Container>
        <StyledTextField
          label="Title"
          required
          onChange={this.handleChange('title')}
          value={this.state.form.title}
        />
        <StyledTextField
          label="URL"
          required
          onChange={this.handleChange('uri')}
          value={this.state.form.uri}
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
          rowsMax={6}
          onChange={this.handleChange('description')}
          value={this.state.form.description}
        />
        <StyledTextField
          label="Tags"
          onChange={this.handleChange('tag')}
          onKeyPress={this.handleAddTag}
          value={this.state.form.tag}
        />
        <TagList
          tags={this.state.form.tags}
          handleDeleteTag={this.handleDeleteTag}
        />
        <InputImage
          screenshot={this.state.form.screenshot}
          handleFileUpload={this.handleFileUpload}
        />
        <SubmitButton
          loading={loadingSubmit}
          handleSubmit={handleSubmitForm(this.state.form)}
        />
      </Container>
    );
  }
}

SubmissionForm.propTypes = {
  /* state */
  loadingSubmit: PropTypes.bool.isRequired,
  /* functions */
  handleSubmitForm: PropTypes.func.isRequired,
};

export default SubmissionForm;
