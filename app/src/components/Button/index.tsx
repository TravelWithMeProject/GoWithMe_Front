import React from 'react';
import { StyledButton } from './style';

interface Props {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  contained?: boolean;
  round?: boolean;
  width?: number;
}

const Button = ({
  onClick,
  children,
  contained = true,
  round = true,
  width = 100,
}: Props) => {
  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      contained={contained}
      round={round}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
