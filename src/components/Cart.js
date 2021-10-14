//rfce keyword
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {productQuantity} from '../actions/productQuantity';
import {clearProduct} from '../actions/clearProduct';

import greyTshirt from './images/greyTshirt.jpg';
import darkgreyTshirt from './images/darkgreyTshirt.jpg';
import greyHoddie from './images/greyHoddie.jpg';
import darkgreyHoddie from './images/darkgreyHoddie.jpg';

function Cart({basketProps, productQuantity, clearProduct}) { //instead of writing props.productQuantity each time, we get if directly from the function argument
    console.log("Cart btn-i clickleyende cixan deyer: ", basketProps);

    let productsInCart = [];

    //Object.keys() method returns the keys inside a JavaScript Object, or a JSON Object
    //looping through all products (products json)
    Object.keys(basketProps.products).forEach(function(item){
        console.log('Items: ', item);

        console.log(basketProps.products[item].inCart);

        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item]);
        }

        console.log('productsInCart array: ', productsInCart);
    })

    // const productImages = [greyTshirt, darkgreyTshirt, greyHoddie, darkgreyHoddie];

    const productImages = (product) => {
        if(product.tagName == 'greyTshirt'){
            return greyTshirt;
        }else if(product.tagName === 'darkGreyTshirt'){
            return darkgreyTshirt;
        }else if(product.tagName === 'greyHoddie'){
            return greyHoddie;
        }else if(product.tagName === 'darkGreyHoddie'){
            return darkgreyHoddie;
        }
    }

    productsInCart = productsInCart.map((eachProduct, index) => {
        console.log('My product and its index: ',eachProduct, index);
        return (
            <Fragment key={index}>
                <div className='product'>
                    <ion-icon onClick={() => clearProduct(eachProduct.tagName)} name="close-circle"></ion-icon>
                    <img src={productImages(eachProduct)} />
                    {/* <span className='sm-hide'>{eachProduct.name}</span> */}
                </div>

                <div className='price sm-hide'>${eachProduct.price}.00</div>

                <div className='quantity'>
                    <ion-icon onClick={() => productQuantity('decrease', eachProduct.tagName)} className='decrease' name="arrow-back-circle-outline"></ion-icon>
                    <span>{eachProduct.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', eachProduct.tagName)} className='increase' name="arrow-forward-circle-outline"></ion-icon>
                </div>

                <div className='total'>${eachProduct.numbers * eachProduct.price}.00</div>
            </Fragment>
        )
    })

    return (
        <div className='container-products'>
            <div className='product-header'>
                <h5 className='product-title'>PRODUCT</h5>
                <h5 className='price sm-hide'>PRICE</h5>
                <h5 className='quantity'>QUANTITY</h5>
                <h5 className='total'>TOTAL</h5>
            </div>

            <div className='products'>
                {productsInCart}
            </div>

            <div className='basketTotalContainer'>
                <h4 className='basketTotalTitle'>Basket Total</h4>
                <h4 className='basketTotal'>{basketProps.cartCost}.00</h4>
            </div>
        </div>
    )
}

const mapStateProps = state => ({
    basketProps: state.basketState //importing basketState from index.js in reducers file
});

//connecting with our reducer
export default connect(mapStateProps,{productQuantity, clearProduct})(Cart);
