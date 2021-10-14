import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addBasket } from '../actions/addAction';
import greyTshirt from './images/greyTshirt.jpg';
import darkgreyTshirt from './images/darkgreyTshirt.jpg';
import greyHoddie from './images/greyHoddie.jpg';
import darkgreyHoddie from './images/darkgreyHoddie.jpg';

const Home = (props) => {
    console.log('Home.js-de props-a gelib dusen: ', props);


    // const [basketNumbers, setBasketNumbers] = useState(0);

    // const addToBasket = () => {
    //     // console.log('Add to basket btn was clicked');
    //     setBasketNumbers(basketNumbers + 1);
    // }

    return (
        <div className='container'>
            <div className='product-info-div'>
                <img src={greyTshirt} alt='Grey Tshirt' />
                <h3>Grey T-shirt</h3>
                <h3>$15.00</h3>
                {/* whenever we click this, we're calling addBasket action */}
                <a onClick={() => props.addBasket('greyTshirt')} className='add-to-cart cart1' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={darkgreyTshirt} alt='Dark Grey Tshirt' />
                <h3>Dark Grey Tshirt</h3>
                <h3>$20.00</h3>
                <a onClick={() => props.addBasket('darkGreyTshirt')} className='add-to-cart cart2' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={greyHoddie} alt='Grey Hoddie' />
                <h3>Grey Hoddie</h3>
                <h3>$25.00</h3>
                <a onClick={() => props.addBasket('greyHoddie')} className='add-to-cart cart3' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={darkgreyHoddie} alt='Dark Grey Hoddie' />
                <h3>Dark Grey Hoddie</h3>
                <h3>$30.00</h3>
                <a onClick={() => props.addBasket('darkGreyHoddie')} className='add-to-cart cart4' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={greyTshirt} alt='Grey Tshirt' />
                <h3>Grey T-shirt</h3>
                <h3>$15.00</h3>
                {/* whenever we click this, we're calling addBasket action */}
                <a onClick={() => props.addBasket('greyTshirt')} className='add-to-cart cart1' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={darkgreyTshirt} alt='Dark Grey Tshirt' />
                <h3>Dark Grey Tshirt</h3>
                <h3>$20.00</h3>
                <a onClick={() => props.addBasket('darkGreyTshirt')} className='add-to-cart cart2' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={greyHoddie} alt='Grey Hoddie' />
                <h3>Grey Hoddie</h3>
                <h3>$25.00</h3>
                <a onClick={() => props.addBasket('greyHoddie')} className='add-to-cart cart3' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={darkgreyHoddie} alt='Dark Grey Hoddie' />
                <h3>Dark Grey Hoddie</h3>
                <h3>$30.00</h3>
                <a onClick={() => props.addBasket('darkGreyHoddie')} className='add-to-cart cart4' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={greyTshirt} alt='Grey Tshirt' />
                <h3>Grey T-shirt</h3>
                <h3>$15.00</h3>
                {/* whenever we click this, we're calling addBasket action */}
                <a onClick={() => props.addBasket('greyTshirt')} className='add-to-cart cart1' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={darkgreyTshirt} alt='Dark Grey Tshirt' />
                <h3>Dark Grey Tshirt</h3>
                <h3>$20.00</h3>
                <a onClick={() => props.addBasket('darkGreyTshirt')} className='add-to-cart cart2' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={greyHoddie} alt='Grey Hoddie' />
                <h3>Grey Hoddie</h3>
                <h3>$25.00</h3>
                <a onClick={() => props.addBasket('greyHoddie')} className='add-to-cart cart3' href='#'>Add to cart</a>
            </div>
            <div className='product-info-div'>
                <img src={darkgreyHoddie} alt='Dark Grey Hoddie' />
                <h3>Dark Grey Hoddie</h3>
                <h3>$30.00</h3>
                <a onClick={() => props.addBasket('darkGreyHoddie')} className='add-to-cart cart4' href='#'>Add to cart</a>
            </div>
            

            {/* <h1>Current Number in Cart: {basketNumbers}</h1> */}
        </div>
    )
}

//first value --> state - null
//here we dont need to bring state to this component, we need to do it for Navbar
export default connect(null, {addBasket})(Home);