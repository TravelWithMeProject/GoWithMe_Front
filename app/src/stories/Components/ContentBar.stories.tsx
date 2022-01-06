import React, { Children } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import ContentBar from '@components/ContentBar';

export default {
  title: 'Components/ContentBar',
  content: 'Components/ContentBar',
  component: ContentBar,
};

const Template: Story = ({preview, title}) => {
  return (
    <StoryWrapper style={{display: 'flex', flexWrap: 'wrap'}}>
      <ContentBar preview={preview} title={title}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed quidem blanditiis earum at porro hic odio debitis, consequuntur quo quis distinctio nobis exercitationem fuga incidunt commodi, ipsa praesentium esse?</p>
      </ContentBar>
      <ContentBar preview={true} title={title}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed quidem blanditiis earum at porro hic odio debitis, consequuntur quo quis distinctio nobis exercitationem fuga incidunt commodi, ipsa praesentium esse?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed quidem blanditiis earum at porro hic odio debitis, consequuntur quo quis distinctio nobis exercitationem fuga incidunt commodi, ipsa praesentium esse?</p>
      </ContentBar>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '여행플래너',
};

export const Open = Template.bind({});
Open.args = {
  title: '준비물 체크리스트',
  preview: true,
};
