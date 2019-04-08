/**
 *
 * SubmissionForm
 *
 */

import React from 'react';
import styled from 'styled-components';

/* MUI */
import TextField from '@material-ui/core/TextField';

/* Shared Components */
import TagList from 'components/TagList';
import { Form } from './types';

/* Local Components */
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
` as typeof TextField;

type Props = {
  loadingSubmit: boolean;
  handleSubmitForm: (form: Form) => () => void;
};

type State = {
  form: Form;
  tag: string;
  preview?: string;
};

/* eslint-disable react/prefer-stateless-function */
class SubmissionForm extends React.PureComponent<Props, State> {
  readonly state: State = {
    form: {
      title: '',
      uri: '',
      github: '',
      description: '',
      tags: [],
      screenshot: undefined,
    },
    tag: '', // current tag input
    preview: undefined, // screenshot preview
  };

  handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { form } = this.state;
    this.setState({ form: { ...form, [field]: e.target.value } });
  };

  handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tag: e.target.value });
  };

  handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const reader = new FileReader();
    const file = e.target.files[0] as Blob;
    const { form } = this.state;

    reader.onloadend = () => {
      this.setState({
        form: { ...form, screenshot: file },
        preview: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && this.state.tag !== '') {
      e.preventDefault();
      const { form } = this.state;
      const tags = [...form.tags, this.state.tag];
      this.setState({ form: { ...form, tags }, tag: '' });
    }
  };

  handleDeleteTag = (tag: string) => () => {
    this.setState(state => {
      const tags = [...state.form.tags];
      const tagToDelete = tags.indexOf(tag);
      tags.splice(tagToDelete, 1);

      return { form: { ...state.form, tags } };
    });
  };

  render() {
    const {
      handleChange,
      handleChangeTag,
      handleFileUpload,
      handleAddTag,
      handleDeleteTag,
    } = this;
    const { loadingSubmit, handleSubmitForm } = this.props;
    const { form, tag, preview } = this.state;

    return (
      <Container>
        <StyledTextField
          label="Title"
          required
          onChange={handleChange('title')}
          value={form.title}
        />
        <StyledTextField
          label="URL"
          required
          onChange={this.handleChange('uri')}
          value={form.uri}
        />
        <StyledTextField
          label="GitHub"
          onChange={this.handleChange('github')}
          value={form.github}
        />
        <StyledTextField
          label="Description"
          required
          multiline
          rowsMax={6}
          onChange={handleChange('description')}
          value={form.description}
        />
        <StyledTextField
          label="Tags"
          onChange={handleChangeTag}
          onKeyPress={handleAddTag}
          value={tag}
        />
        <TagList tags={form.tags} handleDeleteTag={handleDeleteTag} />
        <InputImage preview={preview} handleFileUpload={handleFileUpload} />
        <SubmitButton
          loading={loadingSubmit}
          handleSubmit={handleSubmitForm(form)}
        />
      </Container>
    );
  }
}

export default SubmissionForm;
