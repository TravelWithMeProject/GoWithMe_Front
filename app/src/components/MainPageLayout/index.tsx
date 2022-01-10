import React from 'react';
import { LoginLayout, MainLayout, Wrap } from './styles';

interface Props {
  identity?: React.Component;
  form?: React.Component;
}

const MainPageLayout = ({ identity, form }: Props) => {
  return (
    <Wrap>
      <MainLayout>{identity}</MainLayout>
      <LoginLayout>{form}</LoginLayout>
    </Wrap>
  );
};
export default MainPageLayout;
