import styled from 'styled-components';

export const StyledButton = styled.button<{
  varient: string;
  border: string;
  width: string | undefined;
  size: string;
}>`
  border: 1px solid #5a87ff;
  transition: 0.5s;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.size === 'large' ? 48 : 24)}px;
  border-radius: ${(props) => (props.border === 'round' ? 6 : 0)}px;
  background-color: ${(props) =>
    props.varient === 'contained' ? '#5A87FF' : '#fff'};
  color: ${(props) => (props.varient === 'contained' ? '#fff' : '#5A87FF')};
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(100%);
  }
`;
