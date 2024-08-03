import React, { useEffect, useState } from 'react';
import './Navbar.css';
import navlogo from '../sushi_project_images/nav-logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
  }
function Navbar(props) {
    const [isMobile, setIsMobile] = useState(0);
  useEffect(() =>  {
    setIsMobile(isMobileDevice() ? 1 : 0);
  },[])
    const cart = useSelector((state) => state.cart);
    const cartlength = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return(
        <div>
            
        <div className={props.cart? 'navbar-section-detail-cart' : 'navbar-section-detail'}>
            {props.cart? null: (
                <div className='navbar-section-detail-one'>
                <h3 className='navbar-section-detail-one-left-side'>Monday to Saturday from 10am to 7pm</h3>
                <div className='navbar-section-detail-one-right-side'>
                    <div>On Whatsapp +212 603 927836</div>
                    <div></div>
                    <div>Our Locations:eight avenue 487, NY</div>
                </div>
            </div>
            )}
            <div className='navbar-section-detail-two'>
                <div className='navbar-section-detail-two-one'>
                    <Link to='/'><img src={navlogo} alt='nav-logo'/></Link>
                </div>
                <div className='navbar-section-detail-two-two'>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/menu-small-images'>menu</Link></li>
                        <li><Link to='/'>pages</Link></li>
                        <li><Link to='/'>shop</Link></li>
                    </ul>
                </div>
                <div className='navbar-section-detail-two-three'>
                    <div className='navbar-section-detail-two-three-cart'>
                        {props.cart? null: (
                        <Link to='/cart' style={{textDecoration: 'none',color: '#fff'}}><span>cart ({cartlength.length})</span></Link>
                    )}
                    {props.cart && isMobile === 1? null: (
                        
                    <div className='cart-overview'>
                    {cart.length > 0? (
                        <>
                            
                    <div className='cart-overview-one'>
                        {cart.map((item,i) => {
                            return(
                                <div className='cart-overview-one-item' key={i}>
                                    <div className='cart-overview-one-item-img'><img src={item.image} alt={item.name}/></div>
                                    <div className='cart-overview-one-item-center'>
                                        <div className='cart-overview-one-item-center-title'>{item.name}</div>
                                        <div className='cart-overview-one-item-center-price'>${item.price.toFixed(2)}</div>
                                        <div className='cart-overview-one-item-center-quantity'>Quantity: {item.quantite}</div>
                                    </div>
                                    <div className='cart-overview-one-item-remove'><button onClick={() => dispatch({type: 'remove_cart', payload: item.id})}>×</button></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-overview-two'>
                        <div className='cart-overview-two-one'>Total:</div>
                        <div className='cart-overview-two-two'>$130.00</div>
                    </div>
                    <div className='cart-overview-three'>
                        <Link to='/cart'>
                        <div className="a-before"></div>
                        <div className="a-after"></div>
                        view cart & checkout
                        </Link>
                    </div>
                        </>
                    ) : <div className='cart-preview-no-product'>No products in the cart.</div>}
                </div>
                    )}
                    </div>
                    <div className='navbar-section-detail-two-three-humb'>
                        <div className='navbar-section-detail-two-three-humb-top'></div>
                        <div className='navbar-section-detail-two-three-humb-bottom'></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;