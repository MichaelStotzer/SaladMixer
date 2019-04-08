/*  This is the rootReducer
    It's task is to combine all the reducers
    on the second Tier
    It is as good as one reducer and makes it easier
    to work on the reducers 
*/

import {combineReducers} from 'redux'
import ingredientReducer from './ingredientReducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
    ingredientReducer,
    settingsReducer
})