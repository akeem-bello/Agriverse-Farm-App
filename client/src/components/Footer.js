import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{padding:'1% 15%', background: 'black'}}>
        <div className="row">
          <div className="col-6">
            <img src="https://res.cloudinary.com/akeem/image/upload/v1657051205/agriverse_logo_s1v99h.jpg" alt="logo" width={'23%'}/>
            <p className='text-success mt-2'>© 2022. All Rights Reserved. Developed By AkeemBello</p>
          </div>
          <div className="col-6">
            <p className='text-success'><i className="fa-solid fa-phone"></i> +1(587) 575-2039 </p>
            <p className='text-success mt-2'><i className="fa-solid fa-envelope"></i> belloakeem07@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer