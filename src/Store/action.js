import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  plus,
  minus,
  mult,
  devide
} from "./action.types";

export const add = () => ({ type: COUNTER_INCREMENT });
export const subs = () => ({ type: COUNTER_DECREMENT });
export const Plus = () => ({ type: plus });
export const Minus = () => ({ type: minus });
export const Mult = () => ({ type: mult });
export const Devide = () => ({ type: devide });
