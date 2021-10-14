import { CLEAR_PRODUCT } from "./types";

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log('Clear the product');
        console.log('Product name: ', name);

        dispatch({
            //we pass the CLEAR_PRODUCT action with payload into our reducer
            type: CLEAR_PRODUCT,
            payload: name
        });
    }
}