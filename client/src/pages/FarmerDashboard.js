import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FarmerDashboard = ()=>{
  const navigate = useNavigate()
  const url = 'http://localhost:4000/users/farmer/dashboard'
  const token = localStorage.token
  const [farmerDetails, setfarmerDetails] = useState('')
  const [cocoa, setcocoa] = useState('');
  const [coconut, setcoconut] = useState('');
  const [cashew, setcashew] = useState('');
  const [cassava, setcassava] = useState('');
  const [ginger, setginger] = useState('');
  const [maize, setmaize] = useState('');
  const [oilpalm, setoilpalm] = useState('');
  const [plantain, setplantain] = useState('');
  const [sesame, setsesame] = useState('');
  const [soya, setsoya] = useState('');
  const [yam, setyam] = useState('');
  const [message, setmessage] = useState('');
    useEffect(() => {
      axios.get(url, {
        headers:{
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}).then((res)=>{
        if(!res.data.status){
            localStorage.removeItem('token')
            navigate('/farner/signin')
        }else{
            console.log(res)
            setfarmerDetails(res.data.result)
        }
      })
    }, [])

    const submitProduce = ()=>{
      const produceDetails = {
        firstname:farmerDetails.firstName, 
        lastname:farmerDetails.lastName, 
        lga:farmerDetails.lga, 
        state:farmerDetails.state, 
        number:farmerDetails.phoneNumber, 
        cocoa, 
        coconut, 
        cashew, 
        cassava, 
        ginger, 
        maize, 
        oilpalm, 
        plantain, 
        sesame, 
        soya, 
        yam};
      axios.post(url, produceDetails).then((res)=>{
        setmessage(res.data.message);
        if(res.data.status){
          alert('Your farm produce have been successfully submitted; we will reach out to you shortly. Thank you.')
          setcocoa('');
          setcoconut('');
          setcashew('');
          setcassava('');
          setginger('');
          setmaize('');
          setoilpalm('');
          setplantain('');
          setsesame('');
          setsoya('');
          setyam('');
        }else{
          alert('An error occured, try again later.')
        }
      })
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/farmer/signin')
    }
  let tableStyle ={
    width: '100%'
  }
  
  let tdStyle = {
    border: '1px solid black',
    textAlign: 'center',
    padding: '8px',
  }
  
  let trStyle = {
    backgroundColor: '#F0E6E6'
  }
  return (
    <div style={{paddingBottom:'4%'}}>
      
      <div className="container">
        <div>
        <div style={{marginTop:'20px', marginLeft:'1200px'}}><button className='btn btn-secondary' onClick={logout}>Log Out</button></div>
          <div className="row mb-5">
            <div className="col-9 mt-2">
            <h4 style={{marginBottom:'20px'}}>Welcome, {farmerDetails.firstName}.</h4>
            <p style={{fontSize:'18px'}}>We are glad to have you at Agriverse, and we hope we have a longlasting business relationship with you.</p>
            <p style={{fontSize:'18px'}}>Kindly let us know the quantity of harvested farm produce you have by filling the form below. Once you<br/> are done filling, please click on the submit button and we will reach out to you in less than an hour.</p>
            <p style={{fontSize:'18px'}}>We pride ourselves with swift response and business conclusions, so, our trucks will get to your farm within<br/> <strong>48 hours</strong> of filling this form.</p>
            </div>
          </div>
        </div>
        
        <div>{message}</div>
        <table style={tableStyle}>
          <tr style={trStyle}>
            <th style={tdStyle}><strong>S/N</strong></th>
            <th style={tdStyle}><strong>Farm Produce</strong></th>
            <th style={tdStyle}><strong>Quantity(kg)</strong></th>
          </tr>
          <tr>
            <td style={tdStyle}>1.</td>
            <td style={tdStyle}>Cocoa beans</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcocoa(e.target.value)} value={cocoa}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>2.</td>
            <td style={tdStyle}>Coconut</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcoconut(e.target.value)} value={coconut}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>3.</td>
            <td style={tdStyle}>Cashew nuts</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcashew(e.target.value)} value={cashew}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>4.</td>
            <td style={tdStyle}>Cassava</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcassava(e.target.value)} value={cassava}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>5.</td>
            <td style={tdStyle}>Ginger</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setginger(e.target.value)} value={ginger}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>6.</td>
            <td style={tdStyle}>Maize</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setmaize(e.target.value)} value={maize}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>7.</td>
            <td style={tdStyle}>Oil palm fruits</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setoilpalm(e.target.value)} value={oilpalm}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>8.</td>
            <td style={tdStyle}>Plantain</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setplantain(e.target.value)} value={plantain}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>9.</td>
            <td style={tdStyle}>Sesame seeds</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setsesame(e.target.value)} value={sesame}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>10.</td>
            <td style={tdStyle}>Soya beans</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setsoya(e.target.value)} value={soya}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>11.</td>
            <td style={tdStyle}>Yam</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setyam(e.target.value)} value={yam}/></td>
          </tr>
        </table>
        <div style={{marginTop:'40px', padding:'0 45%'}}>
          <button className='btn btn-dark w-100' onClick={submitProduce}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default FarmerDashboard