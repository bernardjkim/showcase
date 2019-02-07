import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* MUI */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ButtonComment = styled(Button)`
  color: white;
  font-weight: 300;
`;

const StyledTextField = styled(TextField)`
  font-size: 16px;
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: solid 2px;
  border-radius: 5px;
  border-color: #d0caba;
  margin-bottom: 20px;
`;

const CommentForm = props => {
  /* state */
  const { value } = props;
  /* functions */
  const { handleChange, handleSubmit, handleUnAuthorized } = props;
  return (
    <CommentBox onClick={handleUnAuthorized}>
      <StyledTextField
        multiline
        placeholder="Leave a Comment"
        rows={6}
        fullWidth
        InputProps={{ disableUnderline: true }}
        onChange={handleChange}
        value={value}
      />
      <ButtonComment
        color="primary"
        variant="contained"
        disableRipple
        onClick={handleSubmit}
      >
        Comment
      </ButtonComment>
    </CommentBox>
  );
};

CommentForm.propTypes = {
  /* state */
  value: PropTypes.string.isRequired,
  /* function */
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUnAuthorized: PropTypes.func.isRequired,
};

export default CommentForm;
