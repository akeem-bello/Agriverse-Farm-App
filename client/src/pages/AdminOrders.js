import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminOrders() {
  const navigate = useNavigate();
  const url = 'http://localhost:4000/users/admin/orders';
  const [order, setorder] = useState([]);
  axios.get(url).then((res)=>{
      setorder(res.data.orders)
    })

  const logout = ()=>{
    navigate('/admin')
  }

  const farmProduce = ()=>{
    navigate('/admin/produce')
  }

  const inq = ()=>{
    navigate('/admin/messages')
  }

  let tableStyle ={
    width: '100%'
  }
    
  let tdStyle = {
    border: '1px solid black',
    textAlign: 'center',
    padding: '8px',
  }
  
  return (
    <div>
      <div className="container mt-5" style={{paddingBottom:'21.5%'}}>
      <div style={{display: 'inline'}}>
          <button style={{marginRight: '950px'}} className='btn btn-dark' onClick={logout}>Log Out</button>
          <button className='btn btn-light' style={{marginRight:'20px'}} onClick={farmProduce}>Farm Produce</button>
          <button className='btn btn-light' onClick={inq}>Inquiries</button>
        </div>
        <h3 className='text-center mt-5'>Exporters' Orders</h3>
        <table style={tableStyle}>
          <tr>
            <th style={tdStyle}>S/N</th>
            <th style={tdStyle}>Exporter Details</th>
            <th style={tdStyle}>Cocoa (kg)</th>
            <th style={tdStyle}>Coconut (kg)</th>
            <th style={tdStyle}>Cashew (kg)</th>
            <th style={tdStyle}>Cassava (kg)</th>
            <th style={tdStyle}>Ginger (kg)</th>
            <th style={tdStyle}>Maize (kg)</th>
            <th style={tdStyle}>Oil Palm (kg)</th>
            <th style={tdStyle}>Plantain (kg)</th>
            <th style={tdStyle}>Sesame (kg)</th>
            <th style={tdStyle}>Soya (kg)</th>
            <th style={tdStyle}>Yam (kg)</th>
            <th style={tdStyle}>Action</th>
          </tr>
        {order.map((order, index)=>(
          <tr>
            <td style={tdStyle}>{index+1}</td>
            <td style={tdStyle}><div>{order.coyname}</div><div>{order.coyaddress}, {order.coystate}</div><div>{order.coyemail}</div></td>
            <td style={tdStyle}>{order.cocoa}</td>
            <td style={tdStyle}>{order.coconut}</td>
            <td style={tdStyle}>{order.cashew}</td>
            <td style={tdStyle}>{order.cassava}</td>
            <td style={tdStyle}>{order.ginger}</td>
            <td style={tdStyle}>{order.maize}</td>
            <td style={tdStyle}>{order.oilpalm}</td>
            <td style={tdStyle}>{order.plantain}</td>
            <td style={tdStyle}>{order.sesame}</td>
            <td style={tdStyle}>{order.soya}</td>
            <td style={tdStyle}>{order.yam}</td>
            <td style={tdStyle}><button className='btn btn-secondary'>Supplied</button></td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default AdminOrders