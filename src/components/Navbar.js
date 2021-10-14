import React, {useEffect} from 'react';

// The connect() function connects a React component to a Redux store.
//It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
//It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
import {connect} from 'react-redux';

import { getNumbers } from '../actions/getAction';
import {Link} from 'react-router-dom';


function Navbar(props) {
  console.log('Props in navbar component: ', props);

  useEffect(() => {
    getNumbers();
  }, []);
  return (
      <header>
        <div className='overlay'></div>
        <nav>
          <h2>Shopify</h2>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>

            <li className='cart'>
              <Link to='/cart'>
                <ion-icon name="basket-outline"></ion-icon>Cart
                <span className='basketNumbers'>{props.basketProps.basketNumbers}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

//mapStateToProps --> conventional name for this function
const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers})(Navbar);

/*
  The mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively. 

  State and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.



  If your mapStateToProps function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter.

  const mapStateToProps = (state) => ({ todos: state.todos })
*/



/*
  const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
  })

  const mapDispatchToProps = {
    // ... normally is an object full of action creators
  }

  // `connect` returns a new function that accepts the component to wrap:
  const connectToStore = connect(mapStateToProps, mapDispatchToProps)

  // and that function returns the connected, wrapper component:
  const ConnectedComponent = connectToStore(Component)

  // We normally do both in one step, like this:
  connect(mapStateToProps, mapDispatchToProps)(Component)
*/
