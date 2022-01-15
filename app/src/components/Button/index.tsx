import React, { useMemo } from 'react';
import { StyledButton } from './style';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  fill?: boolean;
  border?: 'round' | 'rect';
  varient?: 'contained' | 'outlined';
  size?: 'large' | 'medium' | 'small';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  disabled = false,
  fill = false,
  border = 'rect',
  varient = 'contained',
  size = 'large',
  onClick = () => {},
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

  const fontSize = useMemo(() => {
    switch (size) {
      case 'large':
        return '1em';
      case 'medium':
        return '0.875em';
      case 'small':
        return '0.875em';
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
      fontSize={fontSize}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
