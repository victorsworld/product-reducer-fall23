import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
          <h2>{props.title}</h2>
          <p>Publisher: {props.publisher}</p>
          <p>Genre: {props.genre}</p>
          <p>Price: {props.price}</p>

          <button onClick={()=>props.deleteProduct(props.id)}>Delete</button>
    </div>
  )
}

export default ProductCard