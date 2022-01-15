import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Memo from '@components/TravelPlan/Memo';

export default {
  title: 'Components/TravelPlan/Memo',
  component: Memo,
};

const Template: Story = ({ width, height }) => {
  return (
    <StoryWrapper>
      <Memo />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
