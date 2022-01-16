import CheckBox from '@components/CheckBox';
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

const Template: Story = ({ children, onChange, values, shape }) => {
  return (
    <StoryWrapper>
      <form>
        {values.map((el: number | string, idx: number) => (
          <CheckBox value={el} onChange={onChange} key={idx} shape={shape}>
            {children}
          </CheckBox>
        ))}
      </form>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: '여행용 여권 발급하기',
  values: ['1', '2', 3, '4', 5],
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      console.log(e.target.value);
    } else {
      console.log('체크되지 않음');
    }
  },
};

export const Example = Template.bind({});
Example.args = {
  children: '여행용 여권 발급하기',
  values: ['안녕', '잘가', 123, '아쉽다', 6, 7],
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.checked);
  },
};

export const Example2 = Template.bind({});
Example2.args = {
  children: '여행용 여권 발급하기',
  values: ['가치가요', '전민재', 123, '순기', 6, 7, 10, 12],
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.checked);
  },
  shape: 'round',
};
