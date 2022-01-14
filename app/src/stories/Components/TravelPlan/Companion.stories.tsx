import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Companion from '@components/TravelPlan/Companion';

export default {
  title: 'Components/TravlePlan/Companion',
  component: Companion,
};

const Template: Story = ({ width, height }) => {
  return (
    <StoryWrapper>
      <Companion />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
