import React from 'react'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}} />
                <div>
                <p>123 Acne Street</p>
                <h4>Houston, </h4>
            </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} /> 1-234-567-8900</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} /> trips@galaxy.com</h4>
            </div>
        </div>
        <div className='right'>
        <h4>About Galaxy Travels</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>
            <div className='socials'>
                <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} />
                <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}} />
                <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
