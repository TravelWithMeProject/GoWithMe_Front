import styled from "styled-components";

export const CovidItemContainer = styled.div`
  margin: 10px;
  display: flex;
  border: 1px solid #111;
  padding: 10px;

  p {
    font-size: 18px;
    margin: 0 20px;

    &.coivd-item-confirmed {
      font-weight: bold;
    }
    &.coivd-item-date {
      color: blue;
    }
    &.coivd-item-deaths {
      color: red;
    }
    &.coivd-item-recovered {
      color: green;
    }
  }
`;