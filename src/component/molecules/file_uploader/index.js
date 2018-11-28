import React from 'react';
import {
  InputBox,
  UploadWrapper,
  Label,
  Mandatary,
} from './../../atoms/inputs';
import { Padding } from './../../atoms';

const FileUploader = ({
  name,
  type,
  error,
  placeholder,
  mandatary,
  disabled,
  dataText,
}) => {
  return (
    <Padding size={12} direction="vertical">
      <Label mandatary={mandatary}>
        {name}
        <Mandatary mandatary={mandatary} />
      </Label>
      <UploadWrapper error={error} dataText={dataText}>
        <InputBox
          type={type}
          error={error}
          placeholder={placeholder}
          disabled={disabled}
        />
      </UploadWrapper>
    </Padding>
  );
};
export default FileUploader;
