import React from 'react';
import { StyledInput } from './style';

interface Props {
  type: string;
  placeholder: string;
  value: string;
}

const Input = ({ type="text", placeholder, value }: Props) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;