import styled from 'styled-components';

export const StyledButton = styled.button<{
  varient: string;
  border: string;
  fill: boolean;
  disabled: boolean;
}>`
  border: 1px solid #5a87ff;
  transition: 0.5s;
  width: ${(props) => (props.fill ? '100%' : 'auto')};
  border-radius: ${(props) => (props.border === 'round' ? 6 : 0)}px;
  background-color: ${(props) =>
    props.varient === 'contained' ? '#5A87FF' : '#fff'};
  color: ${(props) => (props.varient === 'contained' ? '#fff' : '#5A87FF')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    filter: ${(props) => !props.disabled && 'brightness(90%)'};
  }
  &:active {
    filter: brightness(100%);
  }
  &.large {
    height: 48px;
    padding: 0px 20px;
    font-size: 1rem;
  }
  &.medium {
    height: 36px;
    padding: 0px 16px;
    font-size: 0.875rem;
  }
  &.small {
    height: 24px;
    padding: 0px 12px;
    font-size: 0.875rem;
  }
`;
