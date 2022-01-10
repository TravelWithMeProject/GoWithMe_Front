import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import MainPageLayout from '@components/MainPageLayout';

export default {
  title: 'Components/MainPageLayout',
  component: MainPageLayout,
};

const Template: Story = ({}) => {
  return (
    <StoryWrapper>
      <MainPageLayout />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
