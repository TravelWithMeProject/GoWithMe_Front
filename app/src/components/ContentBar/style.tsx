import styled from 'styled-components';

export const StyledContentBar = styled.div<{
  isopen: boolean;
}>`
  width: 100%;
  height: 200px;
  p {
    display: ${(props) => (props.isopen ? "block" : "none")};
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: #747474;
  font-weight: bold;
  border-bottom: solid 1px #cccccc;
  transition: all .3s;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &:active {
    background-color: rgb(0, 0, 0, 0.2);
  }

`