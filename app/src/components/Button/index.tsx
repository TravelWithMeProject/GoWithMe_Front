import React from 'react';
import { StyledButton } from './style';

interface Props {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  round?: boolean;
  width?: string;
  varient?: 'contained' | 'outlined';
  size?: 'large' | 'small';
}

const Button = ({
  onClick,
  children,
  width,
  round = true,
  varient = 'contained',
  size = 'large',
}: Props) => {
  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      varient={varient}
      round={round}
      width={width}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
