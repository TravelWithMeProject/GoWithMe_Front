import React, { useState } from 'react';
import {
  InvisibleCheckBox,
  StyledCheckBoxLabel,
  VisibleCheckBox,
} from './style';

interface Props {
  children: React.ReactNode;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ children, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const clickCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    onChange(e);
  };

  return (
    <StyledCheckBoxLabel>
      <InvisibleCheckBox onChange={(e) => clickCheckBox(e)} />
      <VisibleCheckBox>{isChecked && '✔'}</VisibleCheckBox>
      {children}
    </StyledCheckBoxLabel>
  );
};

export default CheckBox;
