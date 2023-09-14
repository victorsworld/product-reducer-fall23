import React, {useState} from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
    const [editBtn, setEditBtn] = useState(false)

    const [editProduct, setEditProduct] = useState({
        id: props.id,
        title: props.title,
        publisher: props.publisher,
        genre: props.genre,
        price: props.price
    })

const onChangeHandler = event => {
    setEditProduct({
        ...editProduct,
        [event.target.name]: event.target.value
    })
}
  return (
    <div className='product-card'>
          <h2>{props.title}</h2>
          {
            editBtn ? 
            (   
            <div> 
                <label htmlFor='title'>Title: </label>
                <input
                    name='title'
                    type='text'
                    value={editProduct.title}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='publisher'>Publisher: </label>
                <input
                    name='publisher'
                    type='text'
                    value={editProduct.publisher}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='genre'>Genre: </label>
                <input
                    name='genre'
                    type='text'
                    value={editProduct.genre}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='price'>Price: </label>
                <input
                    name='price'
                    type='number'
                    step='.01'
                    min='0.01'
                    value={editProduct.price}
                    onChange={onChangeHandler}
                /><br />

            <br />
                <button>Save Edits!</button>
                <button onClick={() => setEditBtn(!editBtn)}>Cancel</button>
            </div>
            )
            :
            (
                <React.Fragment>
                    <p>Publisher: {props.publisher}</p>
                    <p>Genre: {props.genre}</p>
                    <p>Price: {props.price}</p>
                    <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
                </React.Fragment>
            )
          }
         

{/* 
          <button onClick={() => props.editProduct(
                {
                    id: props.id,
                    title: "Edited",
                    publisher: "Penguin Classics",
                    genre: "Action/Adventure",
                    price: 20.99     
                }
          )}>Edit</button> */}

    {/* <button onClick={() => setEditBtn(!editBtn)}>{editBtn ? <>True</> : <>False</>}</button> */}
          <button onClick={()=>props.deleteProduct(props.id)}>Delete</button>
    </div>
  )
}

export default ProductCard