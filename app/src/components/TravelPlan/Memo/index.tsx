import React from 'react';
import ContentBar from '@components/ContentBar';
import { MemoContainer } from './style';

const Memo = () => {
  return (
    <ContentBar title="메모" preview={true}>
      <MemoContainer>
        <textarea placeholder="메모를 입력하세요" />
      </MemoContainer>
    </ContentBar>
  );
};

export default Memo;
