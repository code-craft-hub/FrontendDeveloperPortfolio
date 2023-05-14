import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
     <section id='banner' className='hm-banner-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                   <div className='hm-banner-dsc'>
                      <h4 className='text-white'>HELLO,</h4>
                      <h2 className='text-white'>I'm Kachi</h2>
                      <h5 className='text-white'>Frontend Developer</h5>
                      <p className='text-white content-jusitify'>As a frontend developer I am responsible for developing and implementing user interface designs using web technologies like HTML, CSS, and JavaScript. I work closely with designers and back-end developers to create visually appealing, interactive websites and web applications that provide a seamless user experience.</p>
                      <Link className='rounded'>Hire Me</Link>
                    </div> 
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
export default Banner;