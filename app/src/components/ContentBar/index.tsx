import React, { useState } from 'react';
import { StyledContentBar, Title, Content } from './style';

interface Props {
  open: boolean;
  title: string;
  content: React.ReactNode;
}


const ContentBar = ({ open = false, title, content }: Props) => {
  
  const [isopen, setIsopen] = useState(open);
  const changeopen = () => {
    setIsopen(!isopen);
  }

  return (
    <StyledContentBar>
      <Title isopen={isopen} onClick={changeopen}>{title}</Title>
      <Content isopen={isopen}><p>{content}</p></Content>
    </StyledContentBar>
  );
};

export default ContentBar;