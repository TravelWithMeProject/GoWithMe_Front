import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Input from '@components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template: Story = ({type, placeholder, value}) => {
  return (
    <StoryWrapper>
      <Input type={type} placeholder={placeholder} value={value}/>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: '',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  type: 'text',
  placeholder: '아이디',
  value: '',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: '비밀번호',
  value: '',
};
