import React, { useCallback } from 'react';
import Counter from '@components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { counterClear, counterDecrease, counterIncrease } from '@redux/actionCreator/counter';
import { RootState } from '@redux/reducers';

const CounterPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

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
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClear={onClear}
      />
    </>
  );
};

export default CounterPage;