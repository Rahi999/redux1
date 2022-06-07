import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  plus,
  minus,
  mult,
  devide
} from "./action.types";

let intialState = {
  count: 0
};
// let num = 5;

export const reducer = (state = intialState, action, num) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }

    case COUNTER_DECREMENT: {
      state.count--;
      return { ...state };
    }
    case plus: {
      state.count += num;
      return { ...state };
    }
    case minus: {
      state.count -= num;
      return { ...state };
    }

    case mult: {
      state.count *= num;
      return { ...state };
    }
    case devide: {
      state.count /= num;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
