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

  const buttonPadding = useMemo(() => {
    switch (size) {
      case 'large':
        return '0px 20px';
      case 'medium':
        return '0px 16px';
      case 'small':
        return '0px 12px';
    }
  }, [size]);

  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      varient={varient}
      border={border}
      fill={fill}
      buttonHeight={buttonHeight}
      buttonPadding={buttonPadding}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
