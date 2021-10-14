import {ADD_PRODUCT_BASKET} from './types';

export const addBasket = (productName) => {
    return (dispatch) => { //we dispatch some kind of actions to the reducers
        console.log('Adding to Basket');
        console.log('Product Name: ', productName); //to know what the product is
        dispatch({
            type: ADD_PRODUCT_BASKET, //we're dispatching type of ADD_PRODUCT_BASKET
            payload: productName
        })
    }
}