import { CounterActions, counterTypes } from "@redux/actionTypes/counter";
import { CounterState } from "@redux/types/counter";

const initialState: CounterState = {
  count: 0
};

const CounterReducer = (
  state: CounterState = initialState, 
  action: CounterActions
): CounterState => {
  switch(action.type) {
    case counterTypes.COUNTER_INCREASE:
      return {
        count: state.count += 1,
      }
    case counterTypes.COUNTER_DECREASE:
      return {
        count: state.count -= 1,
      }
    case counterTypes.COUNTER_CLEAR:
      return {
        count: 0,
      }
    default:
      return state;
  }
}

export default CounterReducer;