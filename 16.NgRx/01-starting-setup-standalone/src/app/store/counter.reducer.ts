import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => {
        return state + action.value;
    }),
    on(decrement, (state, action) => {
        return state - action.value;
    })
);


// export function counterReducer(state = initialState) {
//     return state;
// }