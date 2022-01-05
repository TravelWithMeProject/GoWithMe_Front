import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import CheckBox from '@components/CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

const Template: Story = () => {
  return (
    <StoryWrapper>
      <CheckBox />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Example = Template.bind({});
Example.args = {};
