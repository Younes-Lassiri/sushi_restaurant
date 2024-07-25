import React from 'react';
import './Navbar.css';
import navlogo from '../sushi_project_images/nav-logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
    const cartlength = useSelector(state => state.cart);
    return(
        <div className='navbar-section-detail'>
            <div className='navbar-section-detail-one'>
                <h3 className='navbar-section-detail-one-left-side'>Monday to Saturday from 10am to 7pm</h3>
                <div className='navbar-section-detail-one-right-side'>
                    <div>On Whatsapp +12 344 0567899</div>
                    <div></div>
                    <div>Our Locations:eight avenue 487, NY</div>
                </div>
            </div>
            <div className='navbar-section-detail-two'>
                <div className='navbar-section-detail-two-one'>
                    <Link to='/'><img src={navlogo} alt='nav-logo'/></Link>
                </div>
                <div className='navbar-section-detail-two-two'>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/'>menu</Link></li>
                        <li><Link to='/'>pages</Link></li>
                        <li><Link to='/'>shop</Link></li>
                    </ul>
                </div>
                <div className='navbar-section-detail-two-three'>
                    <div className='navbar-section-detail-two-three-cart'><span>cart ({cartlength.length})</span></div>
                    <div className='navbar-section-detail-two-three-humb'>
                        <div className='navbar-section-detail-two-three-humb-top'></div>
                        <div className='navbar-section-detail-two-three-humb-bottom'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;