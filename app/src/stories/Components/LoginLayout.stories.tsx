import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import LoginLayout from '@components/LoginLayout';
import Button from '@components/Button';

export default {
  title: 'Components/LoginLayout',
  component: LoginLayout,
};

const Template: Story = ({ children }) => {
  return (
    <StoryWrapper>
      <LoginLayout>{children}</LoginLayout>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input></input>
      <input></input>
      <Button onClick={() => {}}>로그인</Button>
    </div>
  ),
};
