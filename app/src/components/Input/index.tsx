import React, { useState, ChangeEvent } from 'react';
import { StyledInput } from './style';

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default Input;
