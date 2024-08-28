type Product={
    id:number;
    title:string;
    price:number;
    description:string;
}
import { cookies } from 'next/headers';
import React from 'react'
const ProductPage = async () => {
    // const response = await fetch("http://localhost:3002/products",{
    //     cache:"no-store"
    // });
    const response = await fetch("http://localhost:3002/products",{
        next: { revalidate: 10 },
    });

//we use revalidate to make request every secs that we specified

// we use no store to opt out of caching


//  const cookieStore = cookies()
//     const theme = cookieStore.get("theme");
//     console.log({ theme });

//     const detailsResponse = await fetch("http://localhost:3001/products/1");
//   const details = await detailsResponse.json();
    const products = await response.json();
  
    
    return (
        <ul className="space-y-4 p-4">
          {products.map((product: Product) => (
            <li
              key={product.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-medium">${product.price}</p>
            
            </li>
          ))}
        </ul>
      );
  
}

export default ProductPage
