'use client'
import React, { useMemo, useState } from 'react'
type MemoHookProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const MemoHook = ({count,setCount}:MemoHookProps) => {
    const squaredValue:number  = useMemo(()=>{
        return count + count;
    },[count])


  return (
    <div >
        <p>count {count}</p>
        <p>squared value:{squaredValue}</p>
        <button className='btn bg-red-500 cursor-pointer text-white px-4 rounded-sm' onClick={()=>setCount(count+1)}>Plus </button>
    </div>
  )
}

export default MemoHook

//usememo is used to memoize a value,takes two argument a funtion and array of dependecies
//lets say we have a heavy calculation to run,the function contains the calculation we want to memoize while the array contains the  list the dependencies
//that will trigger the recalcualtion/re-computation  when it changes 

//simply put only when the values in the dependency array change that the function is going to be recalculated