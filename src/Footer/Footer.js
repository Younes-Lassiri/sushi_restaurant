import React from 'react';
import './Footer.css';
import fidalgo from '../sushi_project_images/sushi_footer_logo.png';
import fidalgodark from '../sushi_project_images/footer_bg-dark.png';
function Footer(props) {
    return(
        <div className={props.dark? 'footer-section-dark' : 'footer-section'} id={props.menu? 'footer-section-menu' : null}>
            <div className='footer-section-one'>
                <span>PINTEREST</span>
                <div className="footer-square"></div>
                <span>FACEBOOK</span>
                <div className="footer-square"></div>
                <span>INSTAGRAM</span>
            </div>
            <div className='footer-section-two'>
                <img src={props.dark? fidalgodark : fidalgo} alt='fidalgo'/>
            </div>
            <div className='footer-section-three'>
                <span>© 2024 YOUNES LASSIRI, ALL RIGHTS RESERVED</span>
            </div>
        </div>
    )
}

export default Footer;
