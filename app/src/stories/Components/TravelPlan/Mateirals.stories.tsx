import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Materials from '@components/TravelPlan/Materials';

export default {
  title: 'Components/TravelPlan/Materials',
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
