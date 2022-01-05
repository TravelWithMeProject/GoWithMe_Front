import {
  InvisibleCheckBox,
  StyledCheckBoxLabel,
  VisibleCheckBox,
} from './style';

interface Props {
  children: React.ReactNode;
}

const CheckBox = ({ children }: Props) => {
  return (
    <StyledCheckBoxLabel>
      <InvisibleCheckBox />
      <VisibleCheckBox />
      {children}
    </StyledCheckBoxLabel>
  );
};

export default CheckBox;
