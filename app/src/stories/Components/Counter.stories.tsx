import React, { useCallback } from 'react';
import CounterPage from '@pages/Counter';
import Counter from '@components/Counter';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import { useDispatch } from 'react-redux';
import { counterClear, counterDecrease, counterIncrease } from '@redux/actionCreator/counter';

export default {
  title: 'Components/Couner',
  component: CounterPage,
}

const Template: Story = ({ }) => {
  const dispatch = useDispatch();

  const onIncrease = useCallback((
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    dispatch(counterIncrease());
  }, []);

  const onDecrease = useCallback((
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    dispatch(counterDecrease());
  }, []);

  const onClear = useCallback((
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    dispatch(counterClear());
  }, []);
  
  return (
    <StoryWrapper>
      <Counter 
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClear={onClear}
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
};
