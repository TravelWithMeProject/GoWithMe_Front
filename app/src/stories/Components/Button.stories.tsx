import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Button from '@components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story = ({ children, contained, round, onClick, width }) => {
  return (
    <StoryWrapper>
      <Button
        contained={contained}
        round={round}
        onClick={onClick}
        width={width}
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
  contained: true,
  round: false,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
  width: 50,
};

export const Example2 = Template.bind({});
Example2.args = {
  children: '가치가요',
  contained: false,
  round: true,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
  width: 30,
};
