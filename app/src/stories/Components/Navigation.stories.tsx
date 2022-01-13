import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Navigation from '@components/Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template: Story = ({ width }) => {
  return (
    <StoryWrapper>
      <Navigation width={width} />
    </StoryWrapper>
  );
};

export const example = Template.bind({});
example.args = {
  width: 40,
};
