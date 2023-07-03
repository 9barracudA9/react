import React, {useState} from "react";
import {Iproduct} from "../models";


interface ProductProps {
    product:Iproduct
}

export function Product({product}:ProductProps){
    const [details,setDetails]= useState(false)
    const btnClassName= details ? 'bg-blue-400':'bg-amber-400'
    const btnClasses=['border py-2 px-4 rounded-2xl text-black font-bold',btnClassName]
    return(
        <div className='border-black border py-2 px-4 rounded flex flex-col gap-2 items-center  text-blue-600 mb-4'
        >
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <p>{product.title}</p>
            <p className="font-bold">
                {product.price} </p>
            <button className={ btnClasses.join(" ")}
                    onClick={()=>setDetails(prev=>!prev) }
            >{details ? 'Hide details':"Show details"}
            </button>
            {details && <div>
                <p className='text-black font-semibold text-center mb-9'>{product.description}</p>
                <p> Rate:<span className='font-bold text-green-600'>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}