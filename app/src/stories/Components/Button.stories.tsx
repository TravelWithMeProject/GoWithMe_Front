import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import Button from '@components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  // decorators: [(Story: Story) => <Provider store={store}><Story /></Provider>]
};

const Template: Story = ({ children, contained, round, onClick }) => {
  return (
    <StoryWrapper>
      <Button contained={contained} round={round} onClick={onClick}>
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

export const Example = Template.bind({});
Example.args = {
  children: '가치가요',
  contained: false,
  round: false,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};
