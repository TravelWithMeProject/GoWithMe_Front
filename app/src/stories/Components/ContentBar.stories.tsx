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

const Template: Story = ({open, title, content, minheight, maxheight }) => {
  return (
    <StoryWrapper>
      <ContentBar open={open} title={title} content={content} minheight={minheight} maxheight={maxheight} />
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

export const MaxHeight10 = Template.bind({});
MaxHeight10.args = {
  title: '최대 높이 10px',
  content: '내용',
  open: true,
  maxheight: 10,
};

export const MinHeight100 = Template.bind({});
MinHeight100.args = {
  title: '최소 높이 100px',
  content: '내용',
  open: true,
  minheight: 100,
};