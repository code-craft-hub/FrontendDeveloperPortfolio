import React from 'react';
import Heading from '../Heading';
import AboutData from './AboutData';

const AboutService = () => {
  return (
    <>
      <section className='about-service-sec-wrp py-5'>
         <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <Heading title='About This Services' />
                </div>
            </div>
            <div className='row'>
               {AboutData.map((item,index)=>(
                 <div className='col-3' key={index}>
                    <div className='about-ser-item'>
                        <i><img src={item.icon} alt='Icons'/></i>
                        <h4>{item.title}</h4>
                    </div>
                </div>
               ))}
            </div>
         </div>
      </section>
    </>
  )
}
export default AboutService