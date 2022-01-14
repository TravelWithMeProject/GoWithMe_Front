import React from 'react';
import { StyledMainSection } from './style';

interface Props {
  children: React.ReactNode;
}

const MainSection = ({ children }: Props) => {
  return <StyledMainSection>{children}</StyledMainSection>;
};

export default MainSection;
