import React, {useEffect, useState} from 'react';
import {Product} from "./components/Products";

import axios, {AxiosError} from "axios";
import {Iproduct} from "./models";

function App() {

   const [products,setProducts]=  useState<Iproduct[]>([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    async function fetchProducts(){
       try {
           setLoading(true)
        const response =await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
       }
       catch (e:unknown){
           const error= e as AxiosError
           setLoading(false)
       }
    }

useEffect(()=>{
fetchProducts()
},[])

  return(
      <div className='container mx-auto max-w-2xl pt-5' >
          {loading &&<p className='text-center font-bold'>Loading...</p>}
        {products.map(product=><Product product={product} key={product.id}/>)}
      </div>
  )

}

export default App;
