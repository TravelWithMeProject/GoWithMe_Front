import { StyledCheckBox, StyledCheckBoxLabel } from './style';

interface Props {
  children: React.ReactNode;
  id: string;
}

const CheckBox = ({ children, id }: Props) => {
  return (
    <>
      <StyledCheckBox id={id} />
      <StyledCheckBoxLabel htmlFor={id}>{children}</StyledCheckBoxLabel>
    </>
  );
};

export default CheckBox;
