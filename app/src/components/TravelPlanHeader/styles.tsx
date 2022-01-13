import styled from 'styled-components';

export const StyledTravelPlanHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  padding: 0 102px;
  .arrow {
    width: fit-content;
    position: relative;
    top: 60px;
    left: -50px;
    cursor: pointer;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3em;
    color: #5a87ff;
  }
  h3 {
    font-size: 1.5em;
    color: #5a86ff6e;
  }
`;

export const TravelInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      margin-right: 27px;
    }
    li:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    padding: 8px 14px;
  }
`;
