import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Header from '@components/Header';
import Materials from '@components/TravelPlan/Materials';

export default {
  title: 'Components/Travel/Materials',
  component: Materials,
};

const Template: Story = ({}) => {
  return (
    <StoryWrapper>
      <Materials />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
