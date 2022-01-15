import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import TravelPlanCompanion from '@components/TravelPlan/Companion';

export default {
  title: 'Components/TravelPlan/Companion',
  component: TravelPlanCompanion,
};

const Template: Story = ({}) => {
  return (
    <StoryWrapper>
      <TravelPlanCompanion />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
