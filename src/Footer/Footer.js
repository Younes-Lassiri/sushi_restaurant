import React from 'react';
import './Footer.css';
import fidalgo from '../sushi_project_images/sushi_footer_logo.png';
import fidalgodark from '../sushi_project_images/footer_bg-dark.png';
function Footer(props) {
    return(
        <div className={`footer-section${props.theme}`}>
            <div className='footer-section-left-side'></div>
            <div className='footer-section-center-side'><img src={props.dark? fidalgodark : fidalgo} alt='fidalgo'/></div>
            <div className='footer-section-right-side'></div>
            <div className='footer-section-bottom'>
                <div className='footer-section-bottom-left'>
                    <span>PINTEREST</span>
                    <div className="footer-square"></div>
                    <span>FACEBOOK</span>
                    <div className="footer-square"></div>
                    <span>INSTAGRAM</span>
                </div>
                <div className='footer-section-bottom-right'>
                    © 2024 YOUNES LASSIRI, ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer;



            