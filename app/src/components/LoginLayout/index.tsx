import React from 'react';
import { StyledLoginLayout } from './styles';

interface Props {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: Props) => {
  return <StyledLoginLayout>{children}</StyledLoginLayout>;
};

export default LoginLayout;
