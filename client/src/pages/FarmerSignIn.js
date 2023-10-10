import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FarmerSignIn = ()=>{
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [message, setmessage] = useState('');
  const url = 'http://localhost:4000/users/farmer/signin';

  const signIn = ()=>{
    const farmerDetails = {email, password};
    axios.post(url, farmerDetails).then((res)=>{
      setmessage(res.data.message);
      localStorage.token = res.data.token
      if(res.data.status){
        navigate('/farmer/dashboard')
      }
    })
  }
let divStyle = {
  padding: '0% 23%'
}

let colStyle = {
  borderRadius: '5%',
  backgroundColor: 'white',
  marginTop: '100px',
  marginBottom: '118px'
}

let headStyle = {
  color: 'green'
}

let labelStyle = {
  fontSize: '14px',
  marginTop: '20px',
  color: 'green'
}

let btnStyle = {
  color: 'white',
  float: 'center',
  fontSize: '16px'
}

let inpStyle = {
  backgroundColor: '#F0E6E6'
}
  return (
    <div>
      <div className="container">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Login to your Farmer Account</h3>
                    <div className='text-center'>{message}</div>

                    <label style={labelStyle}><strong>Email Address</strong></label>
                    <input type="text" className='form-control my-2' placeholder='Email Address' value={email} onChange={(e)=>setemail(e.target.value)} style={inpStyle}/>

                    <label style={labelStyle}><strong>Password</strong></label>
                    <input style={inpStyle} type="password" className='form-control my-2' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    
                    <button className='btn mt-4 w-100 p-2 justify-center btn-success' style={btnStyle} onClick={signIn}>LOG IN</button>

                    <div style={{marginTop: '30px', textAlign: 'center'}}>
                            <p><strong>Exporter</strong> Sign In <a href="/exporter/signin">here.</a></p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FarmerSignIn