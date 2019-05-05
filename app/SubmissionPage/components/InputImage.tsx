import React from 'react';
import styled from 'styled-components';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Typography from '@material-ui/core/Typography';

const ScreenShot = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const PlaceHolder = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  background-color: #e8eaea;

  @media (min-width: 600px) {
    height: 240px;
  }
  @media (min-width: 1000px) {
    height: 300px;
  }
  @media (min-width: 1400px) {
    height: 360px;
  }
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

export const InputImage: React.FC<Props> = props => {
  const { preview, handleFileUpload } = props;
  return (
    <PlaceHolder>
      <InputFile type="file" onChange={handleFileUpload} />
      {preview ? (
        <ScreenShot src={preview} alt="ScreenShot" />
      ) : (
        <React.Fragment>
          <Label>Upload ScreenShot</Label>
          <FontAwesomeIcon size="3x" color="#a9caca" icon={faPlusCircle} />
        </React.Fragment>
      )}
    </PlaceHolder>
  );
};
