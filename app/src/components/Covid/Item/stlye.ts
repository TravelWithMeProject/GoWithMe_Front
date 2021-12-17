import { color } from "@config/colorSystem";
import styled from "styled-components";

export const CovidItemContainer = styled.div`
  margin: 15px 0;
  display: flex;
  border: 1px solid #111;
  border-radius: 4px;
  padding: 10px;
  transition: transform .2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-7px);
    border: 1px solid ${color.blue}
  }

  p {
    font-size: 18px;
    margin: 0 20px;

    &.coivd-item-confirmed {
      font-weight: bold;
    }

    &.coivd-item-date {
      color: ${color.blue};
    }

    &.coivd-item-deaths {
      color: ${color.red};
    }

    &.coivd-item-recovered {
      color: ${color.green};
    }
  }
`;