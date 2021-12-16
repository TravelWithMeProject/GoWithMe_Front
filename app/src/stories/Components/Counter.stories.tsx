import React from 'react';
import CounterPage from '@pages/Counter';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';

export default {
  title: 'Components/Couner',
  component: CounterPage,
}

const Template: Story = ({ }) => {
  return (
    <StoryWrapper>
      <CounterPage />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
};
