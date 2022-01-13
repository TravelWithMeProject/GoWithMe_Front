import Button from '@components/Button';
import { useCallback, useMemo } from 'react';
import {
  StyledTravelPlanHeader,
  TitleWrapper,
  TravelInfoWrapper,
} from './styles';

interface Props {
  title?: string;
  destination?: string;
  travelDate?: {
    startDate: string;
    endDate: string;
  };
  onClickUpdate: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onClickClone: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const TravelPlanHeader = ({
  title = '내 여행 일정 이름',
  destination,
  travelDate,
  onClickUpdate,
  onClickClone,
  onClickDelete,
}: Props) => {
  const startDate = {
    year: Number(travelDate?.startDate.substring(0, 4)),
    mounth: Number(travelDate?.startDate.substring(5, 7)) - 1,
    date: Number(travelDate?.startDate.substring(8, 10)),
  };

  const calculateDday = useCallback(() => {
    const today = new Date();
    const travelDay = new Date(
      startDate.year,
      startDate.mounth,
      startDate.date,
    );
    const gap = today.getTime() - travelDay.getTime();
    return Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
  }, [startDate]);

  const dDay = useMemo(() => {
    return calculateDday();
  }, [calculateDday]);

  return (
    <StyledTravelPlanHeader>
      <div className="arrow">
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 23.8516L13.169 12.9256"
            stroke="#747474"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 2L13.169 12.926"
            stroke="#747474"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1375 23.8516L23.3064 12.9256"
            stroke="#747474"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1375 2L23.3064 12.926"
            stroke="#747474"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <TitleWrapper>
        <h1>{title}</h1>
        <h3>두근두근... 출발까지 D-{dDay}</h3>
      </TitleWrapper>
      <TravelInfoWrapper>
        <ul>
          <li>
            <span>
              {destination ? ` 여행지 | ${destination}` : '여행지를 추가하세요'}
            </span>
          </li>
          <li>
            <span>
              {travelDate
                ? `여행 날짜 | ${travelDate.startDate} - ${travelDate.endDate}`
                : '여행 날짜를 입력하세요'}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <Button
              border="round"
              size="small"
              onClick={(e) => onClickUpdate(e)}
            >
              수정
            </Button>
          </li>
          <li>
            <Button
              border="round"
              size="small"
              onClick={(e) => onClickClone(e)}
            >
              복제
            </Button>
          </li>
          <li>
            <Button
              border="round"
              size="small"
              onClick={(e) => onClickDelete(e)}
            >
              삭제
            </Button>
          </li>
        </ul>
      </TravelInfoWrapper>
    </StyledTravelPlanHeader>
  );
};

export default TravelPlanHeader;
