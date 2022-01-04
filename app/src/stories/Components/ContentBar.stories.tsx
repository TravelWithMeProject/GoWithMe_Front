import React, { Children } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import ContentBar from '@components/ContentBar';

export default {
  title: 'Components/ContentBar',
  content: 'Components/ContentBar',
  component: ContentBar,
  // decorators: [(Story: Story) => <Provider store={store}><Story /></Provider>]
};

const Template: Story = ({open, title, content }) => {
  return (
    <StoryWrapper>
      <ContentBar open={open} title={title} content={content} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '여행플래너',
  content: '내용',
};

export const Open = Template.bind({});
Open.args = {
  title: '준비물 체크리스트',
  content: '내용',
  open: true,
};