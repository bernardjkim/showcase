import React from 'react';
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
` as typeof Typography;

const InputFile = styled.input`
  display: none;
`;

type Props = {
  preview?: string;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputImage: React.FC<Props> = props => {
  const { preview, handleFileUpload } = props;

  if (preview) {
    return (
      <div>
        <ScreenShot src={preview} alt="ScreenShot" />
      </div>
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

export default InputImage;
