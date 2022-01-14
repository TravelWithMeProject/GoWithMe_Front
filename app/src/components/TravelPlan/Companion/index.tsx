import React from 'react';
import ContentBar from '@components/ContentBar';
import Button from '@components/Button';
import { CompanionContainer } from './style';

const Companion = () => {
  return (
    <ContentBar title="동행">
      <CompanionContainer>
        <div>아직 동행이 없어요</div>
        <div>커뮤니티에서 동행을 찾아볼까요?</div>
        <div></div>
        <Button
          varient="contained"
          border="round"
          width="30%"
          onClick={() => console.log('Clicked')}
          size="large"
        >
          동행 찾기 페이지로 이동
        </Button>
      </CompanionContainer>
    </ContentBar>
  );
};

export default Companion;
