import React from 'react';
import ContentBar from '@components/ContentBar';
import { MemoContainer } from './style';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TravelPlanMemo = ({ value, onChange }: Props) => {
  return (
    <ContentBar title="메모" preview={true}>
      <MemoContainer>
        <textarea
          value={value}
          placeholder="메모를 입력하세요"
          onChange={onChange}
        />
      </MemoContainer>
    </ContentBar>
  );
};

export default TravelPlanMemo;
