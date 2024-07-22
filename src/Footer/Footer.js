import React from 'react';
import './Footer.css';
import fidalgo from '../sushi_project_images/sushi_footer_logo.png';
function Footer() {
    return(
        <div className='footer-section'>
            <div className='footer-section-one'>
                <span>PINTEREST</span>
                <div className="footer-square"></div>
                <span>FACEBOOK</span>
                <div className="footer-square"></div>
                <span>INSTAGRAM</span>
            </div>
            <div className='footer-section-two'>
                <img src={fidalgo} alt='fidalgo'/>
            </div>
            <div className='footer-section-three'>
                <span>© 2024 YOUNES LASSIRI, ALL RIGHTS RESERVED</span>
            </div>
        </div>
    )
}

export default Footer;