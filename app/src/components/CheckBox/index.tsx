import React, { useCallback, useState } from 'react';
import {
  InvisibleCheckBox,
  StyledCheckBoxLabel,
  VisibleCheckBox,
} from './style';

interface Props {
  children: React.ReactNode;
  value: number | string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ value, children, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const clickCheckBox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => !prev);
      onChange(e);
    },
    [onChange],
  );

  return (
    <StyledCheckBoxLabel>
      <InvisibleCheckBox value={value} onChange={(e) => clickCheckBox(e)} />
      <VisibleCheckBox>{isChecked && '✔'}</VisibleCheckBox>
      {children}
    </StyledCheckBoxLabel>
  );
};

export default CheckBox;
