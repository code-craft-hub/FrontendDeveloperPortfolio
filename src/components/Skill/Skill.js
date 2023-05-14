import React from 'react'
import Heading from '../Heading';

const Skill = () => {
  return (
    <> 
     <section id='skills' className='skill-sec-wrp py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                   <Heading className='text-white' title='My Skills' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='skill-wrp d-flex align-items-center justify-content-between'>
                        <div className='skill-dsc'>
                            <h5 className='text-white'>My Skills</h5>
                            <h2 className='text-white'>You Can Imagine <br/> I Can Do</h2>
                            <p className='text-white'>As a frontend developer I am responsible for developing and implementing user interface designs using web technologies like HTML, CSS, and JavaScript. I work closely with designers and back-end developers to create visually appealing, interactive websites and web applications that provide a seamless user experience.</p>
                        </div>
                        <div className='skill-bar'>
                            <h5>Next.js</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                            <h5>Angular</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                            <h5>Frontend Developer</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                            <h5>Javascript</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <h5>React Js</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
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
export default Skill;