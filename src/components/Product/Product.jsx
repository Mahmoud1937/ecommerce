import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart, useCrudCart } from '../useCart'

export default function Product({pro}){
let{mutate}=useCrudCart(addToCart)

  return<>
  <div className="col-md-2">
 
    <div className='product p-3 cursor-pointer my-2'>
    <Link to={`/productDetails/${pro._id}`} >
    <img className='w-100' src={pro.imageCover} alt={pro.title} />
    <h2 className=' h6 text-center text-main '>{pro.category.name}</h2>
    <p className='font-sm'>{pro.title}</p>
    <div className='d-flex justify-content-between'>
    <span>{pro.price}EGP</span>
    <span>{pro.ratingsAgerage} <i className='fas fa-star rating-color'></i> </span>

    </div>
      </Link>

    <button className='btn btn-main w-100 text-light bg-main' onClick={()=>mutate(pro._id)}>Add to Cart</button>
    </div>
   

  </div>
  </>
}