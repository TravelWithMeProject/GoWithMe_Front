import React, { useState } from 'react';
import { StyledInput } from './style';

interface Props {
  type: string;
  placeholder: string;
  value: string;
}

const Input = ({ type = 'text', placeholder = '', value = '' }: Props) => {
  const [Value, setValue] = useState(value);

  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={Value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
