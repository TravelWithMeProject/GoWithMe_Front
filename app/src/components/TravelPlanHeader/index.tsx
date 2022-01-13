import Button from '@components/Button';
import {
  StyledTravelPlanHeader,
  TitleWrapper,
  TravelInfoWrapper,
} from './styles';

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
      <TravelInfoWrapper>
        <ul>
          <li>
            <span>여행지 | 부산 제주</span>
          </li>
          <li>
            <span>여행 날짜 | 2022.01.01 - 2022.01.10</span>
          </li>
        </ul>
        <ul>
          <li>
            <Button border="round" size="small" onClick={() => {}}>
              수정
            </Button>
          </li>
          <li>
            <Button border="round" size="small" onClick={() => {}}>
              복제
            </Button>
          </li>
          <li>
            <Button border="round" size="small" onClick={() => {}}>
              삭제
            </Button>
          </li>
        </ul>
      </TravelInfoWrapper>
    </StyledTravelPlanHeader>
  );
};

export default TravelPlanHeader;
