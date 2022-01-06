import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 10px 0;
  border-bottom: 1px solid #c4c4c4;

  h1 {
    margin-left: 102px;
    color: #747474;
  }

  ul {
    display: flex;
  }

  a {
    color: #747474;
    margin-right: 55px;

    &:last-of-type {
      margin-right: 102px;
    }

    &.active {
      font-weight: bold;
    }
  }
`;

export const InnderContainer = styled.div`
  width: 100%;
`;
