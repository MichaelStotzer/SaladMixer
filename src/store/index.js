/*  This is the store. In redux there is only one
    store which manages all the states.
    A reducer is required to receive and action
    and apply the change to the store
*/

import {createStore} from 'redux'
import rootReducer from '../reducers'

//  the store only has one main reducer
export default store = createStore(rootReducer)