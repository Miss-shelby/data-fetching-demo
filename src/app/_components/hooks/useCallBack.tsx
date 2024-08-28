import React from 'react'
const CallBackHook = ({handleClick}:{handleClick:() => void}) => {
  return (
    <div>
        <button onClick={handleClick} className='btn bg-blue-500 mt-4 cursor-pointer text-white px-4 rounded-sm'>Minus</button>
    </div>
  )
}

export default CallBackHook
//when we create a function,a neww function refrence is created on each render but with usecallback it retuns the funtion refrence
//as long the dependency array remains unchanged preventing unnecessary recreation of the function
//usecallback memoizes a function,useful when we need to pass function as props to the child 

// When to Use:

// Passing Functions as Props: If you’re passing a function down to child components as a prop,
//  use useCallback to prevent the child component from re-rendering unnecessarily due to the function being recreated on each parent render.
// Dependency Arrays: Use useCallback when the function depends on certain values that don’t change often. 
// This prevents the function from being recreated unless one of its dependencies changes.