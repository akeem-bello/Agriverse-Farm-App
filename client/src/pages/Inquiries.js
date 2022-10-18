import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Inquiries = ()=>{
    const navigate = useNavigate();
    const url = 'http://localhost:4000/users/admin/messages';
    const [inquiry, setinquiry] = useState([]);
    axios.get(url).then((res)=>{
      setinquiry(res.data.inquiry)
    })

    const logout = ()=>{
        navigate('/admin')
    }

    const farmProduce = ()=>{
        navigate('/admin/produce')
    }

    const expOrd = ()=>{
        navigate('/admin/orders')
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
          <button style={{marginRight: '900px'}} className='btn btn-dark' onClick={logout}>Log Out</button>
          <button className='btn btn-light' style={{marginRight:'20px'}} onClick={farmProduce}>Farm Produce</button>
          <button className='btn btn-light' onClick={expOrd}>Exporters' Orders</button>
        </div>
        <h3 className='text-center mt-5'>Inquiries</h3>
        <table style={tableStyle}>
          <tr>
            <th style={tdStyle}>S/N</th>
            <th style={tdStyle}>Name</th>
            <th style={tdStyle}>Email</th>
            <th style={tdStyle}>Message</th>
            <th style={tdStyle}>Action</th>
          </tr>
        {inquiry.map((inquiry, index)=>(
          <tr>
            <td style={tdStyle}>{index+1}</td>
            <td style={tdStyle}>{inquiry.name}</td>
            <td style={tdStyle}>{inquiry.email}</td>
            <td style={tdStyle}>{inquiry.message}</td>
            <td style={tdStyle}><button className='btn btn-secondary'>Delete</button></td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default Inquiries