import { CounterTypes } from "@redux/actionTypes/counter"

export const counterIncrease = () => {
  return {
    type: CounterTypes.COUNTER_INCREASE,
  }
}

export const counterDecrease = () => {
  return {
    type: CounterTypes.COUNTER_DECREASE,
  }
}

export const counterClear = () => {
  return {
    type: CounterTypes.COUNTER_CLEAR,
  }
}