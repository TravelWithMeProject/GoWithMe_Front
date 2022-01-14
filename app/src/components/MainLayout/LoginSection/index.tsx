import React from 'react';
import { StyledLoginSection } from './styled';

interface Props {
  children: React.ReactNode;
}

const LoginSection = ({ children }: Props) => {
  return <StyledLoginSection>{children}</StyledLoginSection>;
};

export default LoginSection;
