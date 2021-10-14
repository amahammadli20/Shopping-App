import { ADD_PRODUCT_BASKET, GET_NUMBER_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT} from "../actions/types";

const initialSate = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        greyTshirt: {
            name: 'Grey Tshirt',
            tagName: 'greyTshirt',
            price: 15.00,
            numbers: 0, //number of products
            inCart: false
        },
        darkGreyTshirt: {
            name: 'Dark Grey Tshirt',
            tagName: 'darkGreyTshirt',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        greyHoddie: {
            name: 'Grey Hoddie',
            tagName: 'greyHoddie',
            price: 25.00,
            numbers: 0,
            inCart: false
        },darkGreyHoddie: {
            name: 'Dark Grey Hoddie',
            tagName: 'darkGreyHoddie',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
    }
}

//whenever we don't pass argument for state, it takes initialSate by default 
export default (state = initialSate, action) => {
    let productSelected = "";

    switch(action.type){
        case ADD_PRODUCT_BASKET: //whenever we pass the action (ADD_PRODUCT_BASKET) to this reducer 
            productSelected = {
                ...state.products[action.payload] //we get the name of clicked product through action payload and access the obj of that product frpm our initial state
                //... --> copying the values into a new obj
            }
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log('productSelected value: ', productSelected);
            return {
                ...state, //grabbing all states 
                basketNumbers: state.basketNumbers + 1, //returning a new state. Where is this(basketReducer) going to? --> to index.js
                cartCost: state.cartCost + state.products[action.payload].price, //whatever the last version of cart cost + clicked product's price
                products: { //update 'products' state 
                    ...state.products, //whatever it was before
                    [action.payload]: productSelected //+ updated info such as quantity, inCart etc.
                }
            }
        case GET_NUMBER_BASKET: //whenever we pass the action (GET_NUMBER_BASKET) to this reducer
            return {
                ...state //return whatever the state is before
            }
        case INCREASE_QUANTITY:
            //copying all the key and values of clicked product: ex: state.products['greyTshirt]
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1 //increase the quantity of that clicked product in cart page
            return {
                //returning a new state 
                ...state, //a copy of state before +
                cartCost: state.cartCost + state.products[action.payload].price, //updating cartCost(totalcost) according to increased quantity
                basketNumbers: state.basketNumbers + 1,
                products: { //ipdating products json
                    ...state.products, //copying all the products from the satet before
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}
            
            let newCartCost = 0;
            let newBasketNumbers = 0;

            if(productSelected.numbers === 0){
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers;
            }else{
                productSelected.numbers -= 1; 
                newBasketNumbers = state.basketNumbers - 1;
                newCartCost = state.cartCost - state.products[action.payload].price
            }
            return {
                ...state, 
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost, 
                products: { 
                    ...state.products, 
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected = {
                ...state.products[action.payload]
            }

            let numOfProductBackup = productSelected.numbers;

            productSelected.numbers = 0;
            productSelected.inCart = false

            //updating state, products json
            return {
                ...state,
                basketNumbers: state.basketNumbers - numOfProductBackup,
                cartCost: state.cartCost - (productSelected.price * numOfProductBackup),
                products: {
                    ...state.products,
                    [action.payload]: productSelected //update the actual product that we're removing with this productSelected 
                }
            }
        default: 
            return state;
    }
}