import React from 'react';
import { StyledButton } from './style';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
