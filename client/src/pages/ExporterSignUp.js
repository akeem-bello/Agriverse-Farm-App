import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const ExporterSignUp = ()=>{
  const navigate = useNavigate();
  const [message, setmessage] = useState('');
  const url = 'http://localhost:4000/users/exporter/signup';

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyAddress: '',
      state: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
    onSubmit: (values)=>{
      const exporterDetails = {
        companyName:values.companyName, 
        companyAddress:values.companyAddress, 
        state:values.state, 
        phoneNumber:values.phoneNumber, 
        email:values.email, 
        password:values.password};
        
      axios.post(url, exporterDetails).then((res)=>{
        setmessage(res.data.message);
        if(res.data.status){
          navigate('/exporter/signin')
        }
      })
    },
    validate: (values)=>{
      let errors = {};
      let regexForState = /^([a-zA-Z]+)$/;
      let regexForPhonenumber = /^[\d]{11}$/;
      let regexForPassword = /^([\w]+)([\.])?$/;

      if(!values.companyName){
        errors.companyName = 'This field is required'
      }
      if(!values.companyAddress){
        errors.companyAddress = 'This field is required'
      }
      if(!values.state){
        errors.state = 'This field is required'
      }else if(!regexForState.test(values.state)){
        errors.state = 'Enter an appropriate state'
      }
      if(!values.phoneNumber){
        errors.phoneNumber = 'This field is required'
      }else if(!regexForPhonenumber.test(values.phoneNumber)){
        errors.phoneNumber = 'Phone number must be 11 digits'
      }
      if(!values.email){
        errors.email = 'This field is required'
      }
      if(!values.password){
        errors.password = 'This field is required'
      }else if(!regexForPassword.test(values.password)){
        errors.password = 'Password cannot contain special characters'
      }
      return errors
    }
  })
  let divStyle = {
    padding: '0% 23%'
}

let inpStyle = {
    backgroundColor: '#F0E6E6'
}

let labelStyle = {
    fontSize: '14px',
    marginTop: '20px',
    color: 'green'
}

let pStyle = {
    fontSize: '12px',
    color: 'green'
}

let headStyle = {
    color: 'green'
}

let colStyle = {
    borderRadius: '5%',
    backgroundColor: 'white'
}

let btnStyle = {
    // backgroundColor: 'green',
    color: 'white',
    float: 'center',
    fontSize: '16px'
}
  return (
    <div>
      <div className="container">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5 mb-5 mt-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Exporter Sign Up</h3>
                    <p className='text-center' style={pStyle}>Welcome to Agriverse; the future of agricultural produce logistics.</p>
                    <div className='text-center'>{message}</div>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label style={labelStyle}><strong>Company Name</strong></label>
                        <input type="text" className='form-control my-2' placeholder='Company Name' onChange={formik.handleChange} onBlur={formik.handleBlur} name='companyName' style={inpStyle}/>
                        {formik.touched.companyName ? <div className='text-danger'>{formik.errors.companyName}</div> : ''}

                        <label style={labelStyle}><strong>Address</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Company Address' onChange={formik.handleChange} onBlur={formik.handleBlur} name='companyAddress'/>
                        {formik.touched.companyAddress ? <div className='text-danger'>{formik.errors.companyAddress}</div> : ''}

                        <label style={labelStyle}><strong>State</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='State where company is located' onChange={formik.handleChange} onBlur={formik.handleBlur} name='state'/>
                        {formik.touched.state ? <div className='text-danger'>{formik.errors.state}</div> : ''}

                        <label style={labelStyle}><strong>Phone Number</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Phone Number' onChange={formik.handleChange} onBlur={formik.handleBlur} name='phoneNumber'/>
                        {formik.touched.phoneNumber ? <div className='text-danger'>{formik.errors.phoneNumber}</div> : ''}

                        <label style={labelStyle}><strong>Email Address</strong></label>
                        <input type="text" className='form-control my-2' placeholder='Email Address' onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' style={inpStyle}/>
                        {formik.touched.email ? <div className='text-danger'>{formik.errors.email}</div> : ''}

                        <label style={labelStyle}><strong>Password</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} name='password'/>
                        {formik.touched.password ? <div className='text-danger'>{formik.errors.password}</div> : ''}
                        
                        <button type='submit' className='btn mt-4 w-100 p-2 justify-center bg-success' style={btnStyle}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExporterSignUp