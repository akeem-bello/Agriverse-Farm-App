import React, {useState} from 'react';
import axios from 'axios';

function Contact() {
    const url = 'http://localhost:4000/users/contact';
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const contactUs = {name, email, message}

    const submitMessage = ()=>{
        axios.post(url, contactUs).then((res)=>{
        if(res.data.status){
            alert('Your message has been successfully submitted, we will respond to you shortly.');
            setname('');
            setemail('');
            setmessage('');
        }else{
            alert('An error occured, try again.')
        }
    })
    }
    
  return (
    <div style={{paddingBottom:'7%'}}>
       <div className="container mt-5">
            <h3 style={{textAlign:'center', marginBottom:'20px'}}>Get in touch</h3>
            <div className="row" style={{marginBottom:'20px'}}>
                <div className="col-4" style={{textAlign:'center'}}>
                    <div><i className="fa-solid fa-location-dot"></i></div>
                    <div>Admiralty Way, Lekki Phase 1, Lagos, Nigeria</div>
                </div>
                <div className="col-4" style={{textAlign:'center'}}>
                    <div><i className="fa-solid fa-phone"></i></div>
                    <div>+1(587) 575-2039</div>
                </div>
                <div className="col-4" style={{textAlign:'center'}}>
                    <div><i className="fa-solid fa-envelope"></i></div>
                    <div>contact@agriverse.com</div>
                </div>
            </div>
            <div className="row" style={{marginBottom:'20px'}}>
                <div className="col-6">
                    Name<br/>
                    <input type="text" style={{width:'100%', border:'none'}} onChange={(e)=>setname(e.target.value)} value={name}/>
                </div>
                <div className="col-6">
                    Email<br/>
                    <input type="text" style={{width:'100%', border:'none'}} onChange={(e)=>setemail(e.target.value)} value={email}/>
                </div>
            </div>
            <div>
                Message<br/>
                <textarea type="text" style={{width:'100%', height:'300px', border:'none'}} onChange={(e)=>setmessage(e.target.value)} value={message}/>
            </div>
            <div style={{textAlign:'center', marginTop:'40px'}}>
                <button className='btn btn-dark' onClick={submitMessage}>Send Message</button>
            </div>
        </div> 
    </div>
  )
}

export default Contact