import React, { useState } from 'react';
import { StyledContentBar, Title, Content } from './style';

interface Props {
  open: boolean;
  title: string;
  content: React.ReactNode;
  minheight: number;
  maxheight: number;
}


const ContentBar = ({ open = false, title, content, minheight = 0, maxheight = 500}: Props) => {
  
  const [isopen, setIsopen] = useState(open);
  const changeopen = () => {
    setIsopen(!isopen);
  }

  return (
    <StyledContentBar>
      <Title isopen={isopen} onClick={changeopen}>{title}</Title>
      <Content isopen={isopen} minheight={minheight} maxheight={maxheight}><p>{content}</p></Content>
    </StyledContentBar>
  );
};

export default ContentBar;