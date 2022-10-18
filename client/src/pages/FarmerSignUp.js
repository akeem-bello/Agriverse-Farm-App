import React, {useState} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const FarmerSignUp = ()=>{
    const navigate = useNavigate();
    const [message, setmessage] = useState();
    const url = 'http://localhost:4000/users/farmer/signup';

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            state: '',
            lga: '',
            gender: '',
            phoneNumber: '',
            email: '',
            password: ''
        },
        onSubmit: (values)=>{
            const farmerDetails = {
                firstName:values.firstName,
                lastName:values.lastName,
                state:values.state, 
                lga:values.lga, 
                gender:values.gender, 
                phoneNumber:values.phoneNumber, 
                email:values.email, 
                password:values.password};

            axios.post(url, farmerDetails).then((res)=>{
                setmessage(res.data.message);
                if(res.data.status){
                    navigate('/farmer/signin')
                }
            })
        },
        validate: (values)=>{
            let errors = {};
            let regexForFirstname = /^([a-zA-z]+)$/;
            let regexForLastname = /^([a-zA-z]+)$/;
            let regexForState = /^([a-zA-z]+)$/;
            let regexForLga = /^([a-zA-z]+)$/;
            let regexForPhonenumber = /^[\d]{11}$/;
            let regexForPassword = /^([\w]+)([\.])?$/;
            if(!values.firstName){
                errors.firstName = 'This field is required'
            }else if(!regexForFirstname.test(values.firstName)){
                errors.firstName = 'First name can only contain letters'
            }
            if(!values.lastName){
                errors.lastName = 'This field is required'
            }else if(!regexForLastname.test(values.lastName)){
                errors.lastName = 'Last name can only contain letters'
            }
            if(!values.state){
                errors.state = 'This field is required'
            }else if(!regexForState.test(values.state)){
                errors.state = 'State can only contain letters'
            }
            if(!values.lga){
                errors.lga = 'This field is required'
            }else if(!regexForLga.test(values.lga)){
                errors.lga = 'LGA can only contain letters'
            }
            if(!values.gender){
                errors.gender = 'This field is required'
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
                errors.password = "Password can't contain any special characters"
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
        color: 'white',
        float: 'center',
        fontSize: '16px'
    }
  return (
    <div>
        <div className="container">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5 mb-5 mt-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Farmer Sign Up</h3>
                    <p className='text-center' style={pStyle}>Welcome to Agriverse; the future of agricultural produce logistics.</p>
                    <p className='text-center text-success'>Are you an <strong>exporter?</strong> Create an account <a href="/exporter/signup">here.</a></p>
                    <div className='text-center'>{message}</div>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label style={labelStyle}><strong>First Name</strong></label>
                        <input type="text" className='form-control my-2' placeholder='First Name' onChange={formik.handleChange} onBlur={formik.handleBlur} name='firstName' style={inpStyle}/>
                        {formik.touched.firstName ? <div className='text-danger'>{formik.errors.firstName}</div> : ''}

                        <label style={labelStyle}><strong>Last Name</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Last Name' onChange={formik.handleChange} onBlur={formik.handleBlur} name='lastName'/>
                        {formik.touched.lastName ? <div className='text-danger'>{formik.errors.lastName}</div> : ''}

                        <label style={labelStyle}><strong>State</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='State where farm is located' onChange={formik.handleChange} onBlur={formik.handleBlur} name='state'/>
                        {formik.touched.state ? <div className='text-danger'>{formik.errors.state}</div> : ''}

                        <label style={labelStyle}><strong>Local Government Area</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='LGA where farm is located' onChange={formik.handleChange} onBlur={formik.handleBlur} name='lga'/>
                        {formik.touched.lga ? <div className='text-danger'>{formik.errors.lga}</div> : ''}

                        <select className='w-100' style={labelStyle} onChange={formik.handleChange} onBlur={formik.handleBlur} name='gender'>
                            <option selected disabled>Gender</option>
                            <option value="Male">Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>
                        {formik.touched.gender ? <div className='text-danger'>{formik.errors.gender}</div> : ''}

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

export default FarmerSignUp