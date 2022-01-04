import React, {useState} from 'react';
import { StyledContentBar, Title } from './style';

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
    <StyledContentBar isopen={isopen}>
      <Title onClick={changeopen}>{title}</Title>
      <p>{content}</p>
    </StyledContentBar>
  );
};

export default ContentBar;