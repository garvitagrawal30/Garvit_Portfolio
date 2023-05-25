import React, { useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5lznbcl', 'template_on4qz2t', form.current, 'XGgw30H5b7AruHDcJ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className="contact">
        <div className="contactme">
        <span>Get in Touch!</span>
        <span>Any questions or remarks? Just send me a message.</span>
        </div>
        <div className="c-left">
            <span>Contact Information</span>
            <span>Garvit Agrawal</span>
            <span>+91 7773095726 <br/> <br/>
            garvitagrawal888@gmail.com</span>
            
                <img src={Phone} alt="" />
                <img src={Email} alt="" />
            <div className="icon">
            <a href='https://www.linkedin.com/in/garvit-a-9b4535112/'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href='https://github.com/garvit-a30'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.instagram.com/garvit_agrawal30/'>
                <img src={Instagram} alt="" />
                </a>
            
            </div>


        </div>
        
        <div className="c-right">
            <span>First name</span>
            <span>Last name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Message</span>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form1">
                    
                <input type="text" name="userfirstname" className='user1' placeholder='First Name' />
                <input type="text" name="userlastname" className='user1' placeholder='Last Name' />
                </div>
                <div className="form2">
                <input type="email" name="useremail" className="user2" placeholder="Email" />
                <input type="number" name="usermobile" className="user2" placeholder="Mobile Number" />
                </div>
                <div className="form3">
                <textarea name="message" className="user3" placeholder="Write your Message..." />
                </div>
                <input type="submit" value="Send Message" className="button"/>
                <span style={{textAlign:'center', marginTop:'-1.5rem'}}>{done && "Thank you for Contacting me, Your message has been sent!"} </span>
                <div className="blur c-blur " style={{background:'#C1F5FF'}}>

                </div>

   
   
   
            </form>

        </div>
    </div>

  )
}

export default Contact