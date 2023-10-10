import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExporterDashboard = ()=>{
  const navigate = useNavigate()
  const url = 'http://localhost:4000/users/exporter/dashboard'
  const token2 = localStorage.token2
  const [exporterDetails, setexporterDetails] = useState('')
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
        "Authorization": `Bearer ${token2}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}).then((res)=>{
        if(!res.data.status){
            localStorage.removeItem('token2')
            navigate('/exporter/signin')
        }else{
            setexporterDetails(res.data.result)
        }
      })
    }, [])

    const submitOrder = ()=>{
      const orderDetails = {
        coyname:exporterDetails.companyName, 
        coyaddress:exporterDetails.companyAddress, 
        coystate:exporterDetails.state, 
        coyemail:exporterDetails.email, 
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
      axios.post(url, orderDetails).then((res)=>{
        setmessage(res.data.message);
        if(res.data.status){
          alert('Your order has been successfully submitted; we will reach out to you shortly. Thank you.')
        }
      })
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
    }

    const logout = ()=>{
        localStorage.removeItem('token2')
        navigate('/exporter/signin')
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
    backgroundColor: 'grey'
  }
  return (
    <div style={{paddingBottom:'4%'}}>
      <div className="container">
        <div>
        <div style={{marginTop:'20px'}}>
          <button className='btn btn-dark' onClick={logout}>Log Out</button>
        </div>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h4 style={{marginBottom:'20px'}}>Welcome, {exporterDetails.companyName}.</h4>
            <p>We are glad to have you at Agriverse, and we hope we have a longlasting business relationship with you.</p>
            <p>Below are the current prices of the farm produce we are into, kindly let us know the quantity of each<br/> produce you need by filling the form below. Once you are done filling, please click on the submit button<br/> and we will reach out to you with your invoice in less than an hour.</p>
            <p>We pride ourselves with swift response and business conclusions, so, your order will be supplied to your<br/> company within <strong>3 days</strong> of getting your payment.</p>
            <p>Ensure that you make your payment promptly because, payment validates order. Thank you.</p>
          </div>
      </div>
      
      <div style={{marginTop:'30px', marginBottom:'30px', textAlign:'center'}}>{message}</div>
        <table style={tableStyle}>
          <tr style={trStyle}>
            <th style={tdStyle}><strong>S/N</strong></th>
            <th style={tdStyle}><strong>Farm Produce</strong></th>
            <th style={tdStyle}><strong>Price/Tonne (Naira)</strong></th>
            <th style={tdStyle}><strong>Quantity(Tonnes)</strong></th>
          </tr>
          <tr>
            <td style={tdStyle}>1.</td>
            <td style={tdStyle}>Cocoa beans</td>
            <td style={tdStyle}>750,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcocoa(e.target.value)} value={cocoa}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>2.</td>
            <td style={tdStyle}>Coconut</td>
            <td style={tdStyle}>120,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcoconut(e.target.value)} value={coconut}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>3.</td>
            <td style={tdStyle}>Cashew nuts</td>
            <td style={tdStyle}>340,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcashew(e.target.value)} value={cashew}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>4.</td>
            <td style={tdStyle}>Cassava</td>
            <td style={tdStyle}>280,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setcassava(e.target.value)} value={cassava}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>5.</td>
            <td style={tdStyle}>Ginger</td>
            <td style={tdStyle}>170,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setginger(e.target.value)} value={ginger}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>6.</td>
            <td style={tdStyle}>Maize</td>
            <td style={tdStyle}>290,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setmaize(e.target.value)} value={maize}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>7.</td>
            <td style={tdStyle}>Oil palm fruits</td>
            <td style={tdStyle}>550,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setoilpalm(e.target.value)} value={oilpalm}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>8.</td>
            <td style={tdStyle}>Plantain</td>
            <td style={tdStyle}>345,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setplantain(e.target.value)} value={plantain}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>9.</td>
            <td style={tdStyle}>Sesame seeds</td>
            <td style={tdStyle}>210,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setsesame(e.target.value)} value={sesame}/></td>
          </tr>
          <tr style={trStyle}>
            <td style={tdStyle}>10.</td>
            <td style={tdStyle}>Soya beans</td>
            <td style={tdStyle}>215,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setsoya(e.target.value)} value={soya}/></td>
          </tr>
          <tr>
            <td style={tdStyle}>11.</td>
            <td style={tdStyle}>Yam</td>
            <td style={tdStyle}>365,000</td>
            <td style={tdStyle}><input type="text" onChange={(e)=>setyam(e.target.value)} value={yam}/></td>
          </tr>
        </table>

        <div style={{marginTop:'40px', padding:'0 45%'}}>
          <button className='btn btn-dark' onClick={submitOrder}>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default ExporterDashboard