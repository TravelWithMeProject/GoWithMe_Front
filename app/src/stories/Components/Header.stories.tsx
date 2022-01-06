import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Header from '@components/Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template: Story = ({}) => {
  return <StoryWrapper>{/* <Header /> */}</StoryWrapper>;
};

export const Default = Template.bind({});
Default.args = {};
