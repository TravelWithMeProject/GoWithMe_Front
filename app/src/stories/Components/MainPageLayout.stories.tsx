import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import MainPageLayout from '@components/MainPageLayout';
import styled from 'styled-components';

export default {
  title: 'Components/MainPageLayout',
  component: MainPageLayout,
};

const Identity = styled.div`
  width: 100%;
  height: 2000px;
  background-color: #436abe;
`;

const Example = () => {
  return <Identity />;
};
const Template: Story = ({ identity, form }) => {
  return (
    <StoryWrapper>
      <MainPageLayout identity={identity} form={form} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  identity: <Example />,
  form: <div>form</div>,
};
