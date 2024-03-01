import React from 'react'
import { getSingleProductDetails, useProducts } from '../useProducts/useProducts'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { addToCart, useCrudCart } from '../useCart';

export default function ProductDetails() {
let {id}=useParams()


let { mutate, isLoading, isError, error } = useCrudCart(addToCart)
 let {data}= useProducts('productDetails',()=>
  getSingleProductDetails(id))
  if(isLoading)
  <Loading></Loading>
  if(isError)
  <h2>{error.message}</h2>
 console.log(data);

  return <>
     <div className="row align-items-center justify-content-between my-5">
      <div className="col-md-3">
        <img className='w-100' src={data?.imageCover} alt="" />
       
      </div>
      <div className="col-md-9">
 
          <div className="col-md-9">
          <h4 className='text-main fw-bolder'>{data?.title}</h4>
          <p className='text-main'>{data?.category.name}</p>
          <p className=' text-muted'>{data?.description}</p>
          <div className='d-flex justify-content-between'>
          <h6 className='fw-bold'>EGP {data?.price}</h6>
          <span>{data?.ratingsQuantity} <i className='fas fa-star rating-color'></i> </span>
          </div>
         
          </div>
     
          <button className='my-4  myBtn form-control 'onClick={() => mutate(data?._id)}>Add to Cart</button>
  
      </div>
     </div>
  </>

}
