import React from 'react'

const Layout = async  ({children}:{
    children:React.ReactNode;
}) => {
    const response = await fetch("http://localhost:3002/products",{
    });
    const products = await response.json();
    console.log(products);
    
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
