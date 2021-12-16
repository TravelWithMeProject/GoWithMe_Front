import { CounterTypes } from "@redux/actionTypes/counter"

export const counterIncrease = () => ({
  type: CounterTypes.COUNTER_INCREASE,
});

export const counterDecrease = () => ({
  type: CounterTypes.COUNTER_DECREASE,
});

export const counterClear = () => ({
  type: CounterTypes.COUNTER_CLEAR,
});