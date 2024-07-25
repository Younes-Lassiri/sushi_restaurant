import React, { useEffect, useState } from 'react';
import './Landing.css';
import landingone from '../sushi_project_images/landing_one.jpg';
import logo from '../sushi_project_images/sushi_footer_logo.png';
import foodone from '../sushi_project_images/food_one.png';
import foodtwo from '../sushi_project_images/slider_two.jpg';
import foodthree from '../sushi_project_images/slider_three.jpg';
import { Link as ScrollLink } from 'react-scroll';
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
}

export default function Landing() {
  const [isMobile, setIsMobile] = useState(0);
  useEffect(() =>  {
    setIsMobile(isMobileDevice() ? 1 : 0);
  },[])
  const [index, setIndex] = useState(0)
  const list = [
    {
      name: 'CRISPY TUNA',
      description: 'black pepper tuna, radish and tempura flakes',
      image: foodone
    },
    {
      name: 'SUMI ROLL',
      description: 'Fried shrimps, avocado, flambee salmon, togarashi spicy mix',
      image: foodtwo
    },
    {
      name: 'SUSHI HAVEN',
      description: 'Salmon, tuna, avocado fried in tempura',
      image: foodthree
    }
  ];
  function addIndex(){
    if (index === 2) {
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }
  function minuceIndex(){
    if (index === 0) {
      setIndex(2)
    }else{
      setIndex(index - 1)
    }
  }
  const [clicked, setClicked] = useState(false);


  return (
    <div className='landing-section'>

      {clicked && <div className='navabar-clicked'>
        <div className='landing-section-col-1-clicked'>
            <div className='landing-section-col-1-logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='landing-section-col-1-highlight-clicked'>
              <ul>
                <li><a className='nav-active'>home</a></li>
                <li><a href='#'>our menu</a></li>
                <li><a href='#'>pages</a></li>
                <li><a href='#'>landing</a></li>
              </ul>
            </div>
        </div>
        <div className='landing-section-col-2-clicked'>
          <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one' onClick={() => setClicked(!clicked)}>
                <div className='landing-section-col-2-nav-one-menu'>{isMobile === 0? 'menu' : ''}</div>
                <div className='landing-section-col-2-nav-one-humb-clicked'><span className='landing-section-col-2-nav-one-humb-clicked-one'></span><span className='landing-section-col-2-nav-one-humb-clicked-two'></span></div>
              </div>
          </div>
          <div className='landing-section-col-2-menu-slider-clicked'>
            <div></div>
            <div className='landing-section-col-2-menu-slider-clicked-two'>
              <div className='landing-section-col-2-menu-slider-clicked-two-one'>
                <h4>CONTACT US</h4>
                <p>T. +12 344 0567899</p>
                <p>M. Fidalgo@Example.Com</p>
              </div>
              <div className='landing-section-col-2-menu-slider-clicked-two-two'>
              <h4>ADDRESS</h4>
                <p>Piazza Della Signoria, 12</p>
                <p>21562 . Firenze . Italy</p>
              </div>
            </div>
          </div>
        </div>
        </div>}
        <div className='landing-section-col-1'>
            {isMobile === 0? (
              <div className='landing-section-col-1-logo'>
                  <img src={logo} alt='logo'/>
              </div>
            ) : (
              <div className='landing-section-col-1-logo'>
                <div className='landing-section-col-1-logo-one'><img src={logo} alt='logo'/></div>
            <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one'>
                <div className='landing-section-col-2-nav-one-menu'></div>
                <div className='landing-section-col-2-nav-one-humb' onClick={() => setClicked(!clicked)}><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
              </div>
          </div>
            </div>
            )}
            <div className='landing-section-col-1-highlight'>
            <span>MOON<br></br>SUSHI</span>
            </div>

            
        </div>
        <div className='landing-section-col-2'>
          <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one' onClick={() => setClicked(!clicked)}>
                <div className='landing-section-col-2-nav-one-menu'>menu</div>
                <div className='landing-section-col-2-nav-one-humb'><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
              </div>
          </div>
          <div className='landing-section-col-2-menu-slider'>
            <div className='landing-section-col-2-menu-slider-one'>
              <div className='landing-section-col-2-menu-slider-one-prev'>
              <svg onClick={() => minuceIndex()} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.24000000000000005" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <div className='landing-section-col-2-menu-slider-one-main'>
                <div className='landing-section-col-2-menu-slider-one-main-after'></div>
                <div className='landing-section-col-2-menu-slider-one-main-one'>
                  <div className='landing-section-col-2-menu-slider-one-main-one-img'>
                    <img src={list[index].image} alt={list[index].name}/>
                  </div>
                  <div className='landing-section-col-2-menu-slider-one-main-one-title'>{list[index].name}</div>
                  <div className='landing-section-col-2-menu-slider-one-main-one-desc'>
                  {list[index].description} 
                  </div>
                  <div className='landing-section-col-2-menu-slider-one-main-btn'>
                    <a href="#">
                    <div className="a-before"></div>
                    <div className="a-after"></div>
                    VIEW MENU
                    </a>
                  </div>
                </div>
              </div>
              <div className='landing-section-col-2-menu-slider-one-next'>
              <svg onClick={() => addIndex()} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.24000000000000005" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
            </div>
            <div className='landing-section-col-2-menu-slider-two'>
              <span className={index === 0? 'spanHover' : 'span'} onClick={() => setIndex(0)}></span>
              <span className={index === 1? 'spanHover' : 'span'} onClick={() => setIndex(1)}></span>
              <span className={index === 2? 'spanHover' : 'span'} onClick={() => setIndex(2)}></span>
            </div>
          </div>
        </div>
    </div>
  )
}
