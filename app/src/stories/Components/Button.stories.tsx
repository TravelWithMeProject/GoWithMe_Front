import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Button from '@components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story = ({
  children,
  varient,
  border,
  onClick,
  fill,
  size,
  disabled,
}) => {
  return (
    <StoryWrapper>
      <Button
        varient={varient}
        border={border}
        onClick={onClick}
        fill={fill}
        size={size}
        disabled={disabled}
      >
        {children}
      </Button>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: '편안한',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

export const Example1 = Template.bind({});
Example1.args = {
  children: '가치가요',
  varient: 'contained',
  border: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
  fill: true,
  size: 'large',
};

export const Example2 = Template.bind({});
Example2.args = {
  children: '가치가요',
  varient: 'contained',
  border: 'round',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
  fill: true,
  size: 'small',
};

export const Example3 = Template.bind({});
Example3.args = {
  children: '가치가요',
  varient: 'contained',
  border: 'rect',
  size: 'small',
  disabled: true,
};
