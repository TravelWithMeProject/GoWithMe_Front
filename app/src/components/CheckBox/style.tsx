import styled from 'styled-components';

export const InvisibleCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export const StyledCheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #747474;
  cursor: pointer;
`;

export const VisibleCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #747474;
  border-radius: 50%;
  margin-right: 8px;
`;
