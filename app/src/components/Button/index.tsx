import React from 'react';
import { StyledButton } from './style';

interface Props {
  children: React.ReactNode;
  contained?: boolean;
}

const Button = ({ children, contained = true }: Props) => {
  return <StyledButton contained={contained}>{children}</StyledButton>;
};

export default Button;
