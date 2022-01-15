import React, { useMemo } from 'react';
import { StyledButton } from './style';

interface Props {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  fill?: boolean;
  border?: 'round' | 'rect';
  varient?: 'contained' | 'outlined';
  size?: 'large' | 'medium' | 'small';
}

const Button = ({
  onClick = () => {},
  children,
  fill = false,
  border = 'rect',
  varient = 'contained',
  size = 'large',
}: Props) => {
  const buttonHeight = useMemo(() => {
    switch (size) {
      case 'large':
        return '48px';
      case 'medium':
        return '36px';
      case 'small':
        return '24px';
    }
  }, [size]);

  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      varient={varient}
      border={border}
      fill={fill}
      buttonHeight={buttonHeight}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
