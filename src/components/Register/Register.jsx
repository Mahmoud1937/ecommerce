import  Alert  from 'react-bootstrap/Alert';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
let navigate= useNavigate()
let[loading,setLoading]=useState(false)
const [msg, setmsg] = useState('')
async function submitRegister(values){
  try {
    setLoading(true)
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
    if(data.message==='success')
{    
  
    setmsg(''); 
    setLoading(false)
    navigate('/login')
  }
  } catch (error) {
   setmsg(error.response.data.message); 
   setLoading(false)
  }
  
}
let x= Yup.object({
  name:Yup.string().required("This Field Is Required").min(3,'too short min Char is 3').max(12,"name is long max Char is 12"),
  email:Yup.string().required('Email is Required').email("email is not valid"),
  password:Yup.string().required('This field Is Required').min(5,"password too short").matches(/^[A-Z][a-z0-9]{5,10}$/ ,"Password Is Not Valid must start with Uppercase"),
  rePassword:Yup.string().oneOf([Yup.ref('password'),'Pssword does not Matches']).required('This Field Is Required'),
  phone:Yup.string().required("This Field Is Required").matches(/^01[0-2,5]{1}[0-9]{8}$/ ,'this Number is invalid')
  })
  
  let formik=useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:''

  },
  validationSchema:x,
  onSubmit:submitRegister,
  })
  return <>
  <h2 className='main text-center my-5 text-main font-monospace  '>Sign Up</h2>


<form onSubmit={formik.handleSubmit}>

<Col lg='6'  sm='5' className='mx-auto my-4 ' >
{msg? <Alert className='text-center' variant='warning'>{msg}</Alert> :''}
<FloatingLabel controlId="floatingName" label="Name" className='my-3 text-main'>
        <Form.Control type="text" placeholder="Name" name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name&&formik.touched.name? <Alert variant='danger'>{formik.errors.name}</Alert>:''}
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingEmail" label="Email" className='my-3 text-main'>
        <Form.Control type="email" placeholder="email" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email&&formik.touched.email? <Alert variant='danger'>{formik.errors.email}</Alert>:''}
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className='my-3 text-main'>
        <Form.Control type="password" placeholder="Password" name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password && formik.touched.password? <Alert variant='danger'>{formik.errors.password}</Alert>:''}
      </FloatingLabel>

      { <FloatingLabel controlId="floatingrePassword" label="Confirm Password" className='my-3 text-main'>
        <Form.Control type="password" placeholder="Confirm Password" name='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword}/>
        {formik.errors.rePassword&&formik.touched.rePassword? <Alert variant='danger'>{formik.errors.rePassword}</Alert>:''}
      </FloatingLabel>}

      <FloatingLabel controlId="floatingPhone" label="Phone" className='my-3 text-main'>
        <Form.Control type="tel" placeholder="Phone" name='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}/>
        {formik.errors.phone&&formik.touched.phone? <Alert variant='danger'>{formik.errors.phone}</Alert>:''}
      </FloatingLabel>
      <div>
      {loading? <Spinner className=' d-block my-4  mx-auto ' animation="border" variant="success" />: <button disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-light my-4 w-100 mx-auto d-block' type='submit'>submit</button>  }
      <span >have an account? <Link to='/login' className='text-danger'>sign in </Link></span>
      
      </div>
     

</Col>



</form>

  </> 

}
