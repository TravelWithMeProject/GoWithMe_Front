import React, { useState } from 'react';
import { StyledContentBar, TitleContainer, ContentsContainer } from './style';

interface Props {
  children: React.ReactNode;
  title: string;
  preview: boolean;
}


const ContentBar = ({ preview = false, title, children }: Props) => {

  const [isOpen, setIsOpen] = useState(preview);

  return (
    <StyledContentBar>
      <TitleContainer onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <button>{isOpen ? '↑' : '↓'}</button>
      </TitleContainer>
      <ContentsContainer>
        <div className={isOpen ? 'active' : 'hidden'}>{children}</div>
      </ContentsContainer>
    </StyledContentBar>
  );
};

export default ContentBar;