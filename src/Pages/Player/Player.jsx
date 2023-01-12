import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './action'


//useSelector is like getState() to get state from store
export default function Player() {
  const count=useSelector((state)=>{
    return state.count
  });
  const dispatch = useDispatch()
  return (
    <>
        <center>
        <h1 className='text-primary'>Redux | React-Redux</h1>
          <h2 className='text-white'>Counter : {count}</h2>
          <button className="btn btn-warning m-2" onClick={()=>{dispatch(increment(5))}}>Increment</button>
          <button className="btn btn-warning m-2"onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </center>
    </>
  )
}
