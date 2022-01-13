import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Navigation from '@components/Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template: Story = ({}) => {
  return (
    <StoryWrapper>
      <Navigation />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
