import { counterTypes } from "@redux/actionTypes/counter"

export const counterIncrease = () => ({
  type: counterTypes.COUNTER_INCREASE,
});

export const counterDecrease = () => ({
  type: counterTypes.COUNTER_DECREASE,
});

export const counterClear = () => ({
  type: counterTypes.COUNTER_CLEAR,
});