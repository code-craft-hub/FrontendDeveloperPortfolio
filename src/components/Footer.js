import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <> 
      <footer className='footer-sec-wrp'>
         <div className='footer-top py-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-3'>
                    <div className='ftr-logo'>
                      <Link><img src='./images/logo.png' alt='Footer Logos' /></Link>
                    </div>
                </div>
                <div className='col-3'>
                  <div className='ftr-menu-2 ftr-title'>
                    <h5><span>Quick Links</span></h5>
                    <ul className='clearfix reset-list'>
                      <li><Link><i class="ri-arrow-left-s-line"></i> home</Link></li>
                      <li><Link><i class="ri-arrow-left-s-line"></i> ABOUT</Link></li>
                      <li><Link><i class="ri-arrow-left-s-line"></i> SERVICE</Link></li>
                      <li><Link><i class="ri-arrow-left-s-line"></i> PORTFOLIO</Link></li>
                      <li><Link><i class="ri-arrow-left-s-line"></i> SKILLS</Link></li>
                      <li><Link><i class="ri-arrow-left-s-line"></i> CONTACT</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='ftr-menu-2 ftr-menu-3 ftr-title'>
                    <h5><span>Contact Info</span></h5>
                    <ul className='clearfix reset-list'>
                      <li><Link><i class="ri-map-pin-fill"></i> 71 Washington Place Atlanta, GA 30314</Link></li>
                      <li><Link><i class="ri-phone-fill"></i>  +2349049190032</Link></li>
                      <li><Link><i class="ri-phone-fill"></i>  +1 404 594-2775</Link></li>
                      <li><Link><i class="ri-mail-line"></i> onlinehassle1234@gmail.com</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='ftr-menu-4 ftr-title'>
                    <h5><span>Socail</span></h5>
                    <ul className='clearfix reset-list'>
                      <li><Link><i class="ri-facebook-line"></i></Link></li>
                      <li><Link><i class="ri-twitter-fill"></i></Link></li>
                      <li><Link><i class="ri-linkedin-fill"></i></Link></li>
                      <li><Link><i class="ri-instagram-line"></i></Link></li>
                      <li><Link><i class="ri-youtube-fill"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div className='footer-btm'>
           <div className='container'>
             <div className='row'>
                <div className='col-12'>
                  <p>Built with ❤ Kachi</p>
                </div>
             </div>
           </div>
         </div>
      </footer>
    </>
  )
}

export default Footer;
