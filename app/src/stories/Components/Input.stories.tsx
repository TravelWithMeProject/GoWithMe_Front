import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Input from '@components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template: Story = ({}) => {
  const [data, setData] = useState({
    id: '',
    password: '',
  });

  const { id, password } = data;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <StoryWrapper style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Input name="id" placeholder="아이디" value={id} onChange={onChange} />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChange}
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
