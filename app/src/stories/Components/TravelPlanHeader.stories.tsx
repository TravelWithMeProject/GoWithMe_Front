import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import TravelPlanHeader from '@components/TravelPlanHeader';

export default {
  title: 'Components/TravelPlanHeader',
  component: TravelPlanHeader,
};

const Template: Story = ({}) => {
  return (
    <StoryWrapper>
      <TravelPlanHeader></TravelPlanHeader>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
