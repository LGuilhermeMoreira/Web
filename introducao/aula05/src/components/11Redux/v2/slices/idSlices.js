import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 1}

export const idSlice = createSlice({
    name: "id",
    initialState,
    reducers : {
        incrementar : (state) => {state.value > 150 ? state.value = state.value : state.value  += 1},
        decrementar : (state) => {state.value < 2 ? state.value = state.value : state.value -= 1},
        incrementarValor: (state,action) => {state.value > 150 ? state.value = state.value : state.value  += action.payload},
        decrementarValor: (state,action) => {state.value < 2 ? state.value = state.value : state.value -= action.payload}
    }
})

export const {incrementar , decrementar, incrementarValor, decrementarValor } = idSlice.actions

export default idSlice.reducer //idReducer