import { CounterActions, CounterTypes } from "@redux/actionTypes/counter";
import { CounterState } from "@redux/types/counter";

const initialState: CounterState = {
  count: 0
};

const CounterReducer = (
  state: CounterState = initialState, 
  action: CounterActions
): CounterState => {
  switch(action.type) {
    case CounterTypes.COUNTER_INCREASE:
      return {
        count: state.count += 1,
      }
    case CounterTypes.COUNTER_DECREASE:
      return {
        count: state.count -= 1,
      }
    case CounterTypes.COUNTER_CLEAR:
      return {
        count: 0,
      }
    default:
      return state;
  }
}

export default CounterReducer;