import React from 'react';
import { StyledButton } from './style';

interface Props {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  fill?: boolean;
  border?: 'round' | 'rect';
  varient?: 'contained' | 'outlined';
  size?: 'large' | 'small';
}

const Button = ({
  onClick = () => {},
  children,
  fill = false,
  border = 'rect',
  varient = 'contained',
  size = 'large',
}: Props) => {
  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      varient={varient}
      border={border}
      fill={fill}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
