import {INCREASE_QUANTITY, DECREASE_QUANTITY} from './types';

//action for: either increase or decrease
//name: for which product the action will be applied
export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log('Inside product Quantity');
        console.log('The action and product name: ', action, name);
        
        dispatch({
            // if the action is "increase", the type will be INCREASE_QUANTITY, otherwise will be DECREASE_QUANTITY
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name //the product that we click on
        })
    }
}