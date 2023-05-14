import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <> 
      <header className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='header-innr'>
                        <div className='logo'>
                            {/* <Link><img src='./images/logo.png' alt='Logo' /></Link> */}
                        </div>
                        <div className='nav-menu'>
                            <ul className='clearfix reset-list'>
                                <li className='current-menu-item'><Link to='/'>Home</Link></li>
                                <li><a href='#banner'>About</a></li>
                                <li><a href='#skills'>Skills</a></li>
                                <li><a href='#portfolio'>Portfolio</a></li>
                                <li><a href='#service'>Service</a></li>
                                <li><a href='#contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}
export default Header;