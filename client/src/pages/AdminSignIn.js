import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSignIn = ()=>{
  const navigate = useNavigate();
  const [admin, setadmin] = useState('');
  const [password, setpassword] = useState('');
  const signIn = ()=>{
    if(admin == 'akeem' && password == 'duggz'){
      navigate('/admin/produce')
    }
  }
  let divStyle = {
    padding: '0% 23%'
  }
  
  let colStyle = {
    borderRadius: '5%',
    backgroundColor: 'white',
    marginTop: '100px'
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
    backgroundColor: '#364EC6',
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
                <div className="col-7 mx-auto shadow p-5 mb-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Login to your Account</h3>

                    <label style={labelStyle}><strong>Name</strong></label>
                    <input type="text" className='form-control my-2' placeholder='Admin Name' value={admin} onChange={(e)=>setadmin(e.target.value)} style={inpStyle}/>

                    <label style={labelStyle}><strong>Password</strong></label>
                    <input style={inpStyle} type="text" className='form-control my-2' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    
                    <button className='btn mt-4 w-100 p-2 justify-center' style={btnStyle} onClick={signIn}>LOG IN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSignIn