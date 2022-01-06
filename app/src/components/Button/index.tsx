import React from 'react';
import { StyledButton } from './style';

interface Props {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  contained?: boolean;
  round?: boolean;
  width?: string;
  size?: 'large' | 'small';
}

const Button = ({
  onClick,
  children,
  width,
  contained = true,
  round = true,
  size = 'large',
}: Props) => {
  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      contained={contained}
      round={round}
      width={width}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
