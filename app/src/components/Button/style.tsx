import styled from 'styled-components';

export const StyledButton = styled.button<{
  contained: boolean;
  round: boolean;
}>`
  border: 1px solid #5a87ff;
  border-radius: ${(props) => (props.round ? 6 : 0)}px;
  background-color: ${(props) => (props.contained ? '#5A87FF' : '#fff')};
  color: ${(props) => (props.contained ? '#fff' : '#5A87FF')};
`;
