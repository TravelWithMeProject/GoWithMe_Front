import React from 'react';
import { StyledButton } from './style';

interface Props {
  children: React.ReactNode;
  contained?: boolean;
  round?: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  contained = true,
  round = true,
  onClick,
}: Props) => {
  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      contained={contained}
      round={round}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
