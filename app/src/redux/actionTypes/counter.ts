// Counter 액션 타입
export const CounterTypes = {
  COUNTER_INCREASE: "COUNTER_INCREASE",
  COUNTER_DECREASE: "COUNTER_DECREASE",
  COUNTER_CLEAR: "COUNTER_CLEAR",
} as const;

// Counter 액션 생성 함수 인터페이스
export interface counterIncrease {
  type: typeof CounterTypes.COUNTER_INCREASE,
}

export interface counterDecrease {
  type: typeof CounterTypes.COUNTER_DECREASE,
}

export interface counterClear {
  type: typeof CounterTypes.COUNTER_CLEAR,
}

// Actions
export type CounterActions = 
  counterIncrease |
  counterDecrease |
  counterClear;