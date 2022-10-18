import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    let divStyle = {
        backgroundColor: 'white',
        padding: '1%'
    }
    let linkStyle = {
      marginRight: '30px',
      color: 'green',
      textDecoration: 'none',
      fontSize: '20px'
    }
    let logoStyle = {
        marginRight: '500px'
      }
   
  return (
    <div style={divStyle}>
        <div className="container">
            <Link to='/'><img src="https://res.cloudinary.com/akeem/image/upload/v1657051205/agriverse_logo_s1v99h.jpg" alt="logo" width={'13%'} style={logoStyle}/></Link>
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/farmer/signin' style={linkStyle}>Sign In</Link>
            <Link to='/farmer/signup' style={linkStyle}>Create Account</Link>
            <Link to='#' style={linkStyle}>Seminars</Link>
            <Link to='/contact' style={linkStyle}>Contact Us</Link>
        </div>
    </div>
  )
}

export default NavBar