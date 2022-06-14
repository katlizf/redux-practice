// import {createStore, combineReducers} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
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

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
        // other "name: reducer" pairs can be added
    }
})
// configureStore makes merging multiple reducers into one reducer easy b/c only one reducer can be passed

export const counterActions = counterSlice.actions
// actions already named within counterSlice (ie. increment)

export default store



// -----------------------------------------------------
// DEPRECATED DUE TO IMPLEMENTING ABOVE createSlice
// -----------------------------------------------------
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter+1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//              // example of an action payload
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter-1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }
        // return returns a brand new snapshot/state object which Redux will use to replace its existing state
        // must always set all pieces of state when one piece of state is being updated/replaced (count and show counter must be in each if statement)

// const store = createStore(counterReducer)

// export default store