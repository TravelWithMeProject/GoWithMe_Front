import React from 'react';
import { CounterContainer } from './style';

interface Props {
  count: number;
  onIncrease: (e: React.MouseEvent<HTMLElement>) => void;
  onDecrease: (e: React.MouseEvent<HTMLElement>) => void;
  onClear: (e: React.MouseEvent<HTMLElement>) => void;
}
const Counter = ({ count, onIncrease, onDecrease, onClear }: Props) => {
  return (
    <CounterContainer>
      <div>
        <p>카운터</p>
        <button onClick={onIncrease}>증가</button>
        <button onClick={onDecrease}>감소</button>
        <button onClick={onClear}>초기화</button>
      </div>
      <p>{count}</p>
    </CounterContainer>
  );
};

export default Counter;