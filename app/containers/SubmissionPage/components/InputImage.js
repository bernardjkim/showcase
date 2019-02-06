import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Typography from '@material-ui/core/Typography';

const ScreenShot = styled.img`
  margin-top: 20px;
  height: 400px;
`;

const PlaceHolder = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 400px;
  background-color: #e8eaea;
`;

const Label = styled(Typography)`
  font-size: 24px;
  font-weight: 300;
  color: #a9caca;
  margin-bottom: 10px;
`;

const InputFile = styled.input`
  display: none;
`;

const InputImage = props => {
  /* state */
  const { screenshot } = props;
  /* functions */
  const { handleFileUpload } = props;

  if (screenshot) {
    return (
      <ScreenShot src={URL.createObjectURL(screenshot)} alt="ScreenShot" />
    );
  }
  return (
    <PlaceHolder>
      <InputFile type="file" onChange={handleFileUpload} />
      <Label>Upload ScreenShot</Label>
      <FontAwesomeIcon size="3x" color="#a9caca" icon={faPlusCircle} />
    </PlaceHolder>
  );
};

InputImage.propTypes = {
  /* state */
  screenshot: PropType.oneOfType([PropType.object, PropType.bool]),
  /* functions */
  handleFileUpload: PropType.func.isRequired,
};

export default InputImage;
