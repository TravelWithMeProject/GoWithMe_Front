import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import TravelPlanMemo from '@components/TravelPlan/Memo';

export default {
  title: 'Components/TravelPlan/Memo',
  component: TravelPlanMemo,
};

const Template: Story = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  return (
    <StoryWrapper>
      <TravelPlanMemo value={value} onChange={onChange} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
