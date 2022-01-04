import React from 'react';
import { StyledContentBar } from './style';

interface Props {
  title: string,
  content: React.ReactNode;
}

const ContentBar = ({ title, content }: Props) => {
  return (
    <StyledContentBar>
      <div>{title}</div>
      {content}
    </StyledContentBar>
  );
};

export default ContentBar;