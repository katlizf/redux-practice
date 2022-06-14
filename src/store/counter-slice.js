import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
                // must use payload as the name of the porperty
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})
    // preparing a 'slice' of the global state
    // reducers are all the reducers this slice needs
    // don't need if checks and or action as a param
    // allowed to "mutate" state within a slice, but otherwise should not (should use return to copy & replace state)- Redux toolkit uses imgur will detect state.counter, clone the existing state, create a new state object, and then override the state that's being editing- not actually mutating state

export const counterActions = counterSlice.actions
    // actions already named within counterSlice (ie. increment)

export default counterSlice.reducer