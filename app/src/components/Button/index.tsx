import React from 'react';
import { StyledButton } from './style';

interface Props {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  contained?: boolean;
  round?: boolean;
}

const Button = ({
  onClick,
  children,
  contained = true,
  round = true,
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
