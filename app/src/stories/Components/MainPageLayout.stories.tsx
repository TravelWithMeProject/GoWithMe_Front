import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import MainPageLayout from '@components/MainPageLayout';

export default {
  title: 'Components/MainPageLayout',
  component: MainPageLayout,
};

const Template: Story = ({ identity, form }) => {
  return (
    <StoryWrapper>
      <MainPageLayout identity={identity} form={form} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  identity: <div>identity</div>,
  form: <div>form</div>,
};
