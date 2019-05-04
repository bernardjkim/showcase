/**
 *
 * SubmissionForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

/* Shared Components */
import TagList from 'components/TagList';

/* Local Components */
import { InputImage, StyledTextField, SubmitButton } from './components';

import Grid from '@material-ui/core/Grid';

import { submitForm } from './actions';
import { makeSelectLoading } from './selectors';
import { Form } from './types';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type State = {
  form: Form;
  tag: string;
  preview?: string;
};

const mapStateToProps = createStructuredSelector({
  loadingSubmit: makeSelectLoading(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmitForm: (form: Form) => () => dispatch(submitForm(form)),
});

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

  handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { form } = this.state;
    this.setState({ form: { ...form, [field]: e.target.value } });
  };

  handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tag: e.target.value });
  };

  handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

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
    const { handleChange, handleChangeTag, handleFileUpload, handleAddTag, handleDeleteTag } = this;
    const { loadingSubmit, handleSubmitForm } = this.props;
    const { form, tag, preview } = this.state;

    return (
      <Grid item={true} xs={10} sm={8}>
        <StyledTextField label="Title" required={true} onChange={handleChange('title')} value={form.title} />
        <StyledTextField label="URL" required={true} onChange={this.handleChange('uri')} value={form.uri} />
        <StyledTextField label="GitHub" onChange={this.handleChange('github')} value={form.github} />
        <StyledTextField
          label="Description"
          required={true}
          multiline={true}
          rowsMax={6}
          onChange={handleChange('description')}
          value={form.description}
        />
        <StyledTextField label="Tags" onChange={handleChangeTag} onKeyPress={handleAddTag} value={tag} />
        <TagList tags={form.tags} handleDeleteTag={handleDeleteTag} />
        <InputImage preview={preview} handleFileUpload={handleFileUpload} />
        <SubmitButton loading={loadingSubmit} handleSubmit={handleSubmitForm(form)} />
      </Grid>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SubmissionForm);
