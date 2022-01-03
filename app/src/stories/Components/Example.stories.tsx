import React, { useCallback } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import StoryBookExample from '@components/StoryBookExample';

export default {
  title: 'Pages/Couner',
  component: StoryBookExample,
  // decorators: [(Story: Story) => <Provider store={store}><Story /></Provider>]
};

const Template: Story = ({ title, content }) => {
  return (
    <StoryWrapper>
      <StoryBookExample title={title} content={content} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '타이틀1',
  content: '스토리북 예제1',
};

export const Example = Template.bind({});
Example.args = {
  title: '타이틀2',
  content: '스토리북 예제2',
};
