import React, { useCallback } from 'react';
import Counter from '@components/Counter';
import { useDispatch } from 'react-redux';
import { counterClear, counterDecrease, counterIncrease } from '@redux/actionCreator/counter';

const CounterPage = () => {
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
    <>
      <Counter 
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClear={onClear}
      />
    </>
  );
};

export default CounterPage;