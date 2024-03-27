import  Alert  from 'react-bootstrap/Alert';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';

export default function Login() {
let {setUserToken,setLogin} =useContext(userContext)
let navigate= useNavigate()
let[loading,setLoading]=useState(false)
const [msg, setmsg] = useState('')
async function loginSubmit(values){
  try {
    setLoading(true)
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
    if(data.message==='success')
{    
  
    setmsg(''); 
    setLoading(false)
    setUserToken(data.token)
    setLogin(data.user.name)
    localStorage.setItem('userToken',data.token)
    localStorage.setItem('userName',data?.user.token)
    navigate('/')
  }
  } catch (error) {
   setmsg(error.response.data.message); 
   setLoading(false)
  }
  
}
let x= Yup.object({
  email:Yup.string().required('Email is Required').email("email is not valid"),
  password:Yup.string().required('This field Is Required').min(5,"password too short").matches(/^[A-Z][a-z0-9]{5,10}$/ ,"Password Is Not Valid must start with Uppercase"),

  })
  
  let formik=useFormik({
  initialValues:{

    email:'',
    password:'',


  },
  validationSchema:x,
  onSubmit:loginSubmit,
  })
  return <>
  <h2 className='main text-center my-5 text-main font-monospace  '>Sign in</h2>

<form onSubmit={formik.handleSubmit}>

<Col lg='6'  sm='5' className='mx-auto my-4 ' >
{msg? <Alert className='text-center' variant='warning'>{msg}</Alert> :''}

      
      <FloatingLabel controlId="floatingEmail" label="Email" className='my-3 text-main'>
        <Form.Control type="email" placeholder="email" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email&&formik.touched.email? <Alert variant='danger'>{formik.errors.email}</Alert>:''}
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className='my-3 text-main'>
        <Form.Control type="password" placeholder="Password" name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password && formik.touched.password? <Alert variant='danger'>{formik.errors.password}</Alert>:''}
      </FloatingLabel>

      {loading? <Spinner className=' d-block my-4  mx-auto ' animation="grow" variant="success" />: <button disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-light my-4 w-100 mx-auto d-block' type='submit'>LogIn</button>}
     
<span >do not have an account? <Link to='/register' className='text-danger'>sign up</Link></span>
</Col>



</form>

  </> 

}
