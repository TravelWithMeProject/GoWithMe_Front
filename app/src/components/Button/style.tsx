import styled from 'styled-components';

export const StyledButton = styled.button<{
  varient: string;
  border: string;
  fill: boolean;
  buttonHeight: string;
  buttonPadding: string;
  fontSize: string;
  disabled: boolean;
}>`
  border: 1px solid #5a87ff;
  transition: 0.5s;
  width: ${(props) => (props.fill ? '100%' : 'auto')};
  height: ${(props) => props.buttonHeight};
  border-radius: ${(props) => (props.border === 'round' ? 6 : 0)}px;
  background-color: ${(props) =>
    props.varient === 'contained' ? '#5A87FF' : '#fff'};
  color: ${(props) => (props.varient === 'contained' ? '#fff' : '#5A87FF')};
  padding: ${(props) => (props.fill ? 0 : props.buttonPadding)};
  font-size: ${(props) => props.fontSize};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    filter: ${(props) => !props.disabled && 'brightness(90%)'};
  }
  &:active {
    filter: brightness(100%);
  }
`;
