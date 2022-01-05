import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import CheckBox from '@components/CheckBox';
import React from 'react';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

const Template: Story = ({ children, onChange }) => {
  return (
    <StoryWrapper>
      <CheckBox onChange={onChange}>{children}</CheckBox>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: '여행용 여권 발급하기',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target),
};

export const Example = Template.bind({});
Example.args = {
  children: '여행용 여권 발급하기',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log(e.target.checked),
};
