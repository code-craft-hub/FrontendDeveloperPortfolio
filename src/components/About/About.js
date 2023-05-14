import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className='about-sec-wrp py-5'>
         <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='about-wrp d-flex align-items-center justifiy-content-between'>
                        <div className='about-img'>
                            <img src='images/hm-about-img.jpg' class="img-thumbnail" alt='About Images' />
                        </div>
                        <div className='about-dsc'>
                            <h5>About Me</h5>
                            <h3>I'm <span>Kachi</span></h3>
                            <h4><span>Frontend Developer</span></h4>
                            <strong>Based in World Wide</strong>
                            <p>Hi! My name is Kachi. I am frontend developer, and I'm very passionate and dedicated to my work.</p>
                            <p>With more than 4 years of experience in front-end development, I am confident in my ability to contribute to the success of your team. And I am always learning new technologies that are relevant to my position as a front-end developer.</p>
                            <Link className='rounded' href="#">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default About;
