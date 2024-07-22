import React from 'react';
import './Collection.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Collection() {
    const foods = useSelector(state => state.foods);
  return (
    <div className='collection-section'>
        <div className='collection-section-one'>
            <div className='collection-section-one-title'>SUSHI ROLLS</div>
            <div className='collection-section-one-paragraph'>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud
                </span>
            </div>
        </div>
        <div className='collection-section-two'>
            {
                foods.map((food,i) => {
                    return(
                        <Link to={`/product/${food.name.toLowerCase().split(' ').join('-')}`} style={{textDecoration: 'none'}}>
                            
                        <div className={food.sale === true? 'collection-section-two-one-sale' : 'collection-section-two-one'}>
                            <div className='collection-section-two-one-one'>
                                <div className='collection-section-two-one-one-left-side'>{food.name}</div>
                                <div className='collection-section-two-one-one-prices'>
                                {
                                    food.promo === true? (
                                        <div className='collection-section-two-one-one-promo-side'>${food.oldPrice.toFixed(2)}</div>
                                    ) : null
                                }
                                <div className='collection-section-two-one-one-right-side'>${food.price.toFixed(2)}</div>
                                </div>
                            </div>
                            <div className='collection-section-two-one-two'>
                                <a href=''>add to cart</a>
                            </div>
                            <div className={food.id === 4? `collection-section-two-one-three-${food.id}` :'collection-section-two-one-three'}>
                                <img src={food.image} alt={food.name}/>
                            </div>
                            <div className='collection-section-two-one-four'>
                                {food.description}
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
