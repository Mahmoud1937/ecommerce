
import React from 'react'
import Loading from '../Loading/Loading'
import { getAllProduuct, useProducts } from '../useProducts/useProducts'
import Product from '../Product/Product';

export default function Products() {

 let {data,error,isError,isFetching,isLoading}=useProducts('products',getAllProduuct)

// console.log(data?.data?.data);
console.log('isLoading' +  isLoading);
console.log('isFetching' + isFetching);
if(isLoading)
 return <Loading></Loading>
if(isError)
console.log(error?.message);
  return <>
      <div className="row gy-4" >
        {data.map((pro)=><Product pro={pro} key={pro._id}/>)}
      </div>
  </>




}