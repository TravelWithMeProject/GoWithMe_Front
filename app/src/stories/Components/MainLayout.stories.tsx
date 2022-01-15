import { Story } from '@storybook/react/types-6-0';
import { FullWidthWrapper } from '@components/Common';
import styled from 'styled-components';
import Button from '@components/Button';
import MainSection from '@components/MainLayout/MainSection';
import LoginSection from '@components/MainLayout/LoginSection';

export default {
  title: 'Components/MainPageLayout',
  // component: MainPageLayout,
};

const Identity = styled.div`
  width: 100%;
  height: 2000px;
  background-color: #436abe;
`;

const Identity2 = styled.div`
  width: 100%;
  height: 2000px;
  background-color: red;
`;

const Example = () => {
  return <Identity />;
};

const Example2 = () => {
  return <Identity2 />;
};

const Template: Story = () => {
  return (
    <FullWidthWrapper>
      <MainSection>
        <Example />
        <Example2 />
      </MainSection>
      <LoginSection>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input></input>
          <input></input>
          <Button onClick={() => {}}>로그인</Button>
        </div>
      </LoginSection>
    </FullWidthWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
