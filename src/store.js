import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //to see all actions in browser
import thunk from 'redux-thunk'; //make sure that we re able to click on our actions and they will perfomr asyncly
import rootReducer from './reducers';


const initialSate = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialSate,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;