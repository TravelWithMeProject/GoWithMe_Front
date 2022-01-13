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
  shape?: 'rect' | 'round';
}

const CheckBox = ({ value, children, onChange, shape = 'rect' }: Props) => {
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
      <VisibleCheckBox shape={shape}>{isChecked && '✔'}</VisibleCheckBox>
      {children}
    </StyledCheckBoxLabel>
  );
};

export default CheckBox;
