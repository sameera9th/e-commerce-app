import React from 'react';
import {
  Input,
  Label,
  Mandatory,
  Error,
  UploadWrapper,
} from '../../atoms/input';
import { Padding } from '../../atoms';

class InputMolecule extends React.Component {
  renderError = () => {
    const { error, forceError } = this.props;
    if (error && forceError) {
      return <Error>{error}</Error>;
    }
    return null;
  };
  render() {
    const { type, label, mandatory, ...props } = this.props;
    return (
      <Padding size={12} direction="vertical">
        {label && (
          <Label>
            {label}
            {mandatory && <Mandatory />}
          </Label>
        )}
        {type === 'file' ? (
          <UploadWrapper>
            <Input label={label} type={type} {...props} />
          </UploadWrapper>
        ) : (
          <Input label={label} type={type} {...props} />
        )}
        {this.renderError()}
      </Padding>
    );
  }
}

export default InputMolecule;
