'use client'
import React, { useCallback, useState } from 'react'
import MemoHook from '../_components/hooks/useMemo'
import CallBackHook from '../_components/hooks/useCallBack'
const Hook = () => {
  const [count,setCount] = useState<number>(0)
  const handleClick:() => void = useCallback(()=>{
    setCount(count - 1)
  },[count])
  return (
    <div className='flex min-h-screen flex-col items-center  p-24'>
        <MemoHook count={count} setCount={setCount}/>
        <CallBackHook  handleClick={handleClick}/>
    </div>
  )
}

export default Hook