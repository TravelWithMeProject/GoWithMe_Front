import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import MainPageLayout from '@components/MainPageLayout';
import styled from 'styled-components';
import LoginLayout from '@components/LoginLayout';
import Button from '@components/Button';

export default {
  title: 'Components/MainPageLayout',
  component: MainPageLayout,
};

const Identity = styled.div`
  width: 100%;
  height: 2000px;
  background-color: #436abe;
`;

const Example = () => {
  return <Identity />;
};

const Template: Story = () => {
  return (
    <StoryWrapper>
      <MainPageLayout>
        <Example />
        <LoginLayout>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input></input>
            <input></input>
            <Button onClick={() => {}}>로그인</Button>
          </div>
        </LoginLayout>
      </MainPageLayout>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
