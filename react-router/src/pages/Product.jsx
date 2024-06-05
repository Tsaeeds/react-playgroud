import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCT =  [{
    id: 1,
    name: 'Product 1'
},
{
    id: 2,
    name: 'Product 2'
}
]

const Product = () => {
  return (
    <div>
        <ul>
            {PRODUCT.map(product => <li key={product.id}>
                <Link to={`${product.id}`}  >
                    {product.name}
                </Link>
            </li>)}
        </ul>
    </div>
  )
}

export default Product