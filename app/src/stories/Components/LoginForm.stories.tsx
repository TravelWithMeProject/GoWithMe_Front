import LoginForm from '@components/LoginForm';
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
};

const Template: Story = ({}) => {
  return (
    <StoryWrapper>
      <LoginForm />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
