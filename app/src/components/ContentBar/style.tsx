import styled from 'styled-components';

export const StyledContentBar = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #747474;
  font-weight: bold;
  border-bottom: solid 1px #cccccc;
  transition: all 0.3s;
  padding: 10px 0;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 24px;
    margin: 0 auto;
  }

  button {
    position: absolute;
    right: 0;
    border: 0;
    background-color: transparent;
    font-size: 24px;
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > div {
    transition: all 0.5s ease-in-out;
  }

  .hidden {
    transform: translateY(-100%);
  }
`;
