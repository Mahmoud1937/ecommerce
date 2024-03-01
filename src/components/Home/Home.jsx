
import React from 'react'
import Loading from '../Loading/Loading'
import { getAllProduuct, useProducts } from '../useProducts/useProducts'
import Product from '../Product/Product';
import MainSlider from '../MiniSlider';
import CategorySlider from '../CategorySlider';
export default function Home() {

 let {data,error,isError,isFetching,isLoading}=useProducts('products',getAllProduuct)
 

console.log('isLoading' +  isLoading);
console.log('isFetching' + isFetching);
if(isLoading)
 return <Loading></Loading>
if(isError)
console.log(error?.message);
  return <>


      <div className="row py-2" >
        <MainSlider/>
        <CategorySlider/>
        {data.map((pro)=><Product pro={pro} key={pro._id}/>)}
      </div>
  </>




}