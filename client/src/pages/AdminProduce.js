import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminProduce = ()=>{
  const navigate = useNavigate();
  const url = 'http://localhost:4000/users/admin/produce';
  const [inventory, setinventory] = useState([]);
  axios.get(url).then((res)=>{
    setinventory(res.data.produce)
  })

  const deleteProduce = ()=>{
    const url = 'http://localhost:4000/users/admin/produce';
    axios.post(url).then((res)=>{
      setinventory(res.data.result)
    })
  }

  const logout = ()=>{
    navigate('/admin')
  }

  const expOrd = ()=>{
    navigate('/admin/orders')
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
      <div className="container mt-5" style={{paddingBottom:'22%'}}>
        <div style={{display: 'inline'}}>
          <button style={{marginRight: '950px'}} className='btn btn-dark' onClick={logout}>Log Out</button>
          <button className='btn btn-light' style={{marginRight:'20px'}} onClick={expOrd}>Exporters' Orders</button>
          <button className='btn btn-light' onClick={inq}>Inquiries</button>
        </div>
        <h3 className='text-center mt-5'>Available Farm Produce</h3>
        <table style={tableStyle}>
          <tr>
            <th style={tdStyle}>S/N</th>
            <th style={tdStyle}>Farmer Details</th>
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
        {inventory.map((inventory, index)=>(
          <tr>
            <td style={tdStyle}>{index+1}</td>
            <td style={tdStyle}><div>{inventory.firstname} {inventory.lastname}</div><div>{inventory.lga}, {inventory.state}</div><div>{inventory.number}</div></td>
            <td style={tdStyle}>{inventory.cocoa}</td>
            <td style={tdStyle}>{inventory.coconut}</td>
            <td style={tdStyle}>{inventory.cashew}</td>
            <td style={tdStyle}>{inventory.cassava}</td>
            <td style={tdStyle}>{inventory.ginger}</td>
            <td style={tdStyle}>{inventory.maize}</td>
            <td style={tdStyle}>{inventory.oilpalm}</td>
            <td style={tdStyle}>{inventory.plantain}</td>
            <td style={tdStyle}>{inventory.sesame}</td>
            <td style={tdStyle}>{inventory.soya}</td>
            <td style={tdStyle}>{inventory.yam}</td>
            <td style={tdStyle}><button className='btn btn-secondary' onClick={deleteProduce} value={inventory._id}>Done</button></td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default AdminProduce