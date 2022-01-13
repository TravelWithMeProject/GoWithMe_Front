import React from 'react';
import { StyledMainPageLayout } from './styles';

interface Props {
  children: React.ReactNode;
}

const MainPageLayout = ({ children }: Props) => {
  return <StyledMainPageLayout>{children}</StyledMainPageLayout>;
};
export default MainPageLayout;
