import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CounterPage from '@pages/Counter';
import { StoryWrapper } from '@components/Common';

export default {
  title: 'Component/Box',
  component: CounterPage,
}

const Template: Story = ({ title, content }) => {
  return (
    <StoryWrapper>
      <CounterPage />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "ToToal Premium",
  content: "1.000.000원",
};
