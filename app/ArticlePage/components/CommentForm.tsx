import React from 'react';
import styled from 'styled-components';

/* MUI */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ButtonComment = styled(Button)`
  color: white;
  font-weight: 300;
` as typeof Button;

const StyledTextField = styled(TextField)`
  font-size: 16px;
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
` as typeof TextField;

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

export const CommentForm: React.FC<Props> = props => {
  const { value, handleChange, handleSubmit, handleUnauthorized } = props;
  return (
    <CommentBox onClick={handleUnauthorized}>
      <StyledTextField
        multiline={true}
        placeholder="Leave a Comment"
        rows={6}
        fullWidth={true}
        InputProps={{ disableUnderline: true }}
        onChange={handleChange}
        value={value}
      />
      <ButtonComment color="primary" variant="contained" disableRipple={true} onClick={handleSubmit}>
        Comment
      </ButtonComment>
    </CommentBox>
  );
};

type Props = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleUnauthorized: () => void;
};
