import React from 'react'
import { Link, useParams } from 'react-router-dom'


const ProductDetails = () => {

    const param = useParams();
  return (
    <>
    <div>ProductDetails</div>
    <p>{param.productId}</p>
    <Link to='..' relative='path'>Back</Link>
    </>
  )
}

export default ProductDetails