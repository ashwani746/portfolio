import React, { useRef } from 'react'
import './contact.css'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import Walmart from '../../assets/walmart.png'
import Facebooks from '../../assets/facebookIcons.png'
import Youtube from '../../assets/youtubeIcons.png'
import X from '../../assets/Xicon.png'
import Instagrams from'../../assets/instagramIcon.png'
import emailjs from '@emailjs/browser'




const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kt16wsk','template_p7jiybe', form.current, 'w5yGLKb6iB6oY-yRq-aOJ')
    .then((result)=>{
            console.log(result.test);
            e.target.reset();
            alert('Email Send !');
    },(error) => {
      console.log(error.text);
    }
    );
   }

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>I have had the opprtunity to work with a diverse group of companies .
              Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" />
                <img src={Walmart} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
           <form className="contactForm" ref={form} onSubmit={sendEmail}>
             <input type="text" className="name" placeholder='Your Name' name='your_name'/>
             <input type="email" className="email" placeholder='Your Mail' name='your_email'/>
             <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
           
           <div className="links">
            <img src={Facebooks} alt="Facebook" className="link" />
            <img src={Youtube} alt="Youtube" className="link" />
            <img src={X} alt="X" className="link" />
            <img src={Instagrams} alt="Instagram" className="link" />
           </div>
           </form>
        </div>
    </section>
  );
}

export default Contact