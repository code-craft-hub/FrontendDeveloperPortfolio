import React from 'react';
import Heading from '../Heading';
import ServiceData from './ServiceData';


export const Service = () => {
  return (
    <>
     <section id='service' className='service-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <Heading title='My Service' />
                </div>
            </div>
            <div className='row'>
                {ServiceData.map((items,index)=>(
                    <div className='col-4' key={index}>
                        <div className='service-item'>
                           <div className='service-item-dsc'>
                               <img src={items.image} alt='Service Images' />
                                <h4>{items.title}</h4>
                                <p>{items.dsc}</p>
                                <div className='service-hover'></div>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </section>
    </>
  )
}
