import React from 'react'
import { useParams } from 'react-router-dom'
import { burgers } from '../product';

const Product = () => {
    const {id} = useParams();
    const product = burgers.find((item)=> item._id == id )
    console.log(id);
    console.log(product);
    
    
  return (
    <>
    <main className=' container mx-auto px-[20px] md:px-[80px] py-[10px] lg:px-[130px] lg:py-[16px] '>
        <section>
        <div> 
        <img src={product.image} alt="" />
         </div>
        </section>
    </main>
    
    </>
    
  )
}

export default Product