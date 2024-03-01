import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Loading() {
  return <>
 <div className=" d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0">

 <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#720063"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
 </div>


  </>

}
