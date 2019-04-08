import React from "react";
import SaladMixerApp from './src/SaladMixerApp'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// initial state (instead of props/state)
const initialState = {
  mealPreference : 'isMeat',
}

// the reducer receives the action and modifies the state
const rootReducer = (state = initialState, action) => {
  console.log('reducer running', action)
  switch(action.type){
    case 'SET_VEGAN':
      return Object.assign({}, state, {mealPreference : state.mealPreference = 'isVegan'})
    case 'SET_MEAT':
      return Object.assign({}, state, {mealPreference : state.mealPreference = 'isMeat'})
    case 'SET_VEGETARIAN':
      return Object.assign({}, state, {mealPreference : state.mealPreference = 'isVegetarian'})     
    default: 
// if nothing matches: return state as is
      return state
  }
}
//  a reducers needs to be passed to the store, in this case the rootReducer
const store = createStore(rootReducer)

class App extends React.Component {
  render() {
    return (     
      <Provider store = {store}>
        {/* the provider needs to be wrapped around the root container (App) so that the store can be
          * made available to all lower components 
          */}
        <SaladMixerApp />
      </Provider>
    );
  }
}
export default App;
