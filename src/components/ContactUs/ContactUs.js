import React from 'react';
import Heading from '../Heading';

const ContactUs = () => {
  return (
    <>
     <section id='contact' className='contact-us-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='contact-us-wrp'>
                        <Heading title='Contact Me' />
                        <div className='contact-us-innr clearfix'>
                            <div className='contact-us-lft'>
                                <div className='contact-us-dsc'>
                                    <span><i class="ri-map-pin-fill"></i></span>
                                    <h5>Location</h5>
                                    <a href="#">71 Washington Place Atlanta, GA</a>
                                </div>
                                <div className='contact-us-dsc'>
                                    <span><i class="ri-mail-open-line"></i></span>
                                    <h5>E-Mail</h5>
                                    <a href="#">onlinehassle1234@gmail.com</a>
                                </div>
                                <div className='contact-us-dsc'>
                                    <span><i class="ri-phone-fill"></i></span>
                                    <h5>Contact</h5>
                                    <a href="#">+2349049190032</a>
                                </div>
                            </div>
                            <div className='contact-us-rgt'>
                                <div className='contact-form-fld'>
                                    <label>Your Name</label>
                                    <input type='text' placeholder='Enter Your Name..' />
                                </div>
                                <div className='contact-form-fld'>
                                    <label>Your Email</label>
                                    <input type='email' placeholder='Enter Your Email..' />
                                </div>
                                <div className='contact-form-fld'>
                                    <label>Your Phone</label>
                                    <input type='email' placeholder='Enter Your Phone..' />
                                </div>
                                <div class="contact-form-textarea">
                                    <label>Message</label>
                                    <textarea placeholder="Your Message Here.."></textarea>
                                </div>
                                <div class="contact-form-sumbit">
                                    <button type="submit" value="Submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
export default ContactUs;
