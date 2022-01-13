import { StyledTravelPlanHeader, TitleWrapper } from './styles';

interface Props {
  title?: string;
}

const TravelPlanHeader = ({ title = '내 여행 일정 이름' }: Props) => {
  return (
    <StyledTravelPlanHeader>
      <TitleWrapper>
        <h1>{title}</h1>
        <h3>두근두근... 출발까지 D-00</h3>
      </TitleWrapper>
    </StyledTravelPlanHeader>
  );
};

export default TravelPlanHeader;
