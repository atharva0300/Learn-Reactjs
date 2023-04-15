import React from 'react'

// using react-redux hooks for the components to use the store and the reducer 
import { useSelector , useDispatch } from 'react-redux'

// importing te reducer from counterSlice 
import { increment , decrement } from './counterSlice'




const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    // the counter is the name of the reducer 
    // the value if the value which was stored in the initialValue object in the counterSlice

    const dispatch = useDispatch()


    return (
    <div>
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            Decrement
            </button>
        </div>
    </div> 
  )



}

export default Counter
