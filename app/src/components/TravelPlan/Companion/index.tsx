import React from 'react';
import ContentBar from '@components/ContentBar';
import Button from '@components/Button';
import { CompanionWrapper, ContentsContainer } from './style';

const TravelPlanCompanion = () => {
  return (
    <ContentBar title="동행">
      <CompanionWrapper>
        <ContentsContainer>
          <p>아직 동행이 없어요</p>
          <p>커뮤니티에서 동행을 찾아볼까요?</p>
        </ContentsContainer>
        <Button
          varient="contained"
          border="rect"
          width="30%"
          onClick={() => console.log('Clicked')}
          size="large"
        >
          동행 찾기 페이지로 이동
        </Button>
      </CompanionWrapper>
    </ContentBar>
  );
};

export default TravelPlanCompanion;
