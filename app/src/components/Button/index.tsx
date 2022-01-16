import React from 'react';
import { StyledButton } from './style';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  fill?: boolean;
  border?: 'round' | 'rect';
  varient?: 'contained' | 'outlined';
  size?: 'large' | 'medium' | 'small';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  disabled = false,
  fill = false,
  border = 'rect',
  varient = 'contained',
  size = 'large',
  onClick,
}: Props) => {
  return (
    <StyledButton
      className={size}
      onClick={onClick}
      varient={varient}
      border={border}
      fill={fill}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
