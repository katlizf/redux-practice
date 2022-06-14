import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter-slice'
import authReducer from './auth-slice'



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
        // other "name: reducer" pairs can be added
    }
})
    // configureStore makes merging multiple reducers into one reducer easy b/c only one reducer can be passed

export default store




// -----------------------------------------------------
// DEPRECATED DUE TO IMPLEMENTING createSlice
// -----------------------------------------------------
// import {createStore, combineReducers} from 'redux'

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