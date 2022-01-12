import React from 'react';
import ContentBar from '@components/ContentBar';
import CheckBox from '@components/CheckBox';
import { MaterialsContainer } from './style';

const Materials = () => {
  return (
    <ContentBar title="준비물 체크리스트">
      <MaterialsContainer>
        {Array(10)
          .fill(0)
          .map((el, idx) => (
            <CheckBox key={idx} value={el} onChange={() => {}}>
              여권 재발급받기
            </CheckBox>
          ))}
      </MaterialsContainer>
    </ContentBar>
  );
};

export default Materials;
