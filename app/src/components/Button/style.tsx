import styled from 'styled-components';

export const StyledButton = styled.button<{
  contained: boolean;
}>`
  border: 1px solid #5a87ff;
  background-color: ${(props) => (props.contained ? '#5A87FF' : '#fff')};
`;
