/**
 *
 * SubmissionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

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
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 60%;
  margin-top: 25px;
`;

const StyledChip = styled(Chip)`
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 17px;
  font-weight: 300;
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
      const { tags } = form;
      tags.push(form.tag);
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
        <TagsList>
          {this.state.form.tags.map(tag => (
            <StyledChip
              variant="outlined"
              key={uuid()}
              label={tag}
              onDelete={this.handleDeleteTag(tag)}
            />
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
          onClick={() => {
            handleSubmitForm(this.state.form);
            // TODO: create submission successful page???
            this.props.history.push('/');
          }}
        >
          Submit
        </ButtonSubmit>
      </Container>
    );
  }
}

SubmissionForm.propTypes = {
  // state variables
  history: PropTypes.object.isRequired,

  // dispatch functions
  handleSubmitForm: PropTypes.func.isRequired,
};

export default SubmissionForm;
