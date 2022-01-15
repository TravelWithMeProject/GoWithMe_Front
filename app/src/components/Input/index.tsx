import React, { useState, ChangeEvent } from 'react';
import { StyledInput } from './style';

interface Props {
  name: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
}: Props) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
