import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 222,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
    },
});

export default counterSlice.reducer;
export const { increment2, decrement2, setTo } = counterSlice.actions;
