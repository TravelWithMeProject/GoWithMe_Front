import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;

  & > div {
    display: flex;
  }

  p {
    font-size: 30px;
  }

  button {
    font-size: 18px;
    width: 80px;
    margin-left: 10px;
  }
`;