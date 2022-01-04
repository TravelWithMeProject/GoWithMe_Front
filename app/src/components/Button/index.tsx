import React from 'react';
import { StyledButton } from './style';

interface Props {
  children: React.ReactNode;
  contained?: boolean;
  round?: boolean;
}

const Button = ({ children, contained = true, round = true }: Props) => {
  return (
    <StyledButton contained={contained} round={round}>
      {children}
    </StyledButton>
  );
};

export default Button;
