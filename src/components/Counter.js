import classes from './Counter.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {counterActions} from '../store/index'

function Counter() {

    const counter = useSelector(state => state.counter.counter)
    // params: state managed by redux, return the state you want to extract
    // using useSelector automatically sets up a subscription to the Redux store for this component; component will be updated whenever the data changes in the Redux store

    const dispatch = useDispatch()
    // dispatch is now a function you can call to dispatch an action against the Redux store

    const show = useSelector(state => state.counter.showCounter)    

    const incrementHandler = () => {
        // dispatch({type: 'increment'})  ---deprecated
        dispatch(counterActions.increment())
    }
    const increaseHandler = () => {
        // dispatch({type: 'increase', amount: 5})   ---deprecated
        // add the action (amount) as the second property
        dispatch(counterActions.increase(5))
    }        
    const decrementHandler = () => {
        // dispatch({type: 'decrement'})   ---deprecated
        dispatch(counterActions.decrement())
    }    
    const toggleCounterHandler = () => {
        // dispatch({type: 'toggle'})   ---deprecated
        dispatch(counterActions.toggleCounter())
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter


// -------------------------------------------------
// CLASS COMPONENT EXAMPLE
// -------------------------------------------------
// import {Component} from 'react'
// import {connect} from 'react-redux'

// class Counter extends Component {

//     incrementHandler() {
//         this.props.increment()
//     }
//     decrementHandler() {
//         this.props.decrement()
//     }
//     toggleCounterHandler() {}

//     render() {
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                 <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                 <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     }
// }

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }
        // maps redux state to props which will be received in this component then

// const mapDispatchToProps = dispatch => {
//     increment: () => dispatch({type: 'increment'})
//     decrement: () => dispatch({type: 'decrement'})
// } 
        // store dispatch functions in props so that in the counter component, there are certain props which can be executed as a function, which will then, when executed, dispatch an action to the redux store

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

        // when connect is executed, it returns a new function as a value which is then executed again, then pass the component (Counter) to the returned function as an argument
        // connect will set up and manage a subscription to the redux store just like useDispatch & useSelector for functional components