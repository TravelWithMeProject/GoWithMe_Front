import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import LoginLayout from '@components/LoginLayout';

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
Default.args = {};
