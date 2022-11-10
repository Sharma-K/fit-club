import React from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () =>{

    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_unjiix3', 'template_sdej194', form.current, '4J3VxfDeyjqwS_W49')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="Join" id="join-us">
            <div className="join-l">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                    </div>
                    <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                    </div>
            </div>
           
           
            <div className="join-r">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join;