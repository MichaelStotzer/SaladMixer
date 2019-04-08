//  the reducer receives the action and modifies the state
const initialState = {
        mealPreference : 'isVegan',
    }

settingsReducer = (state = initialState, action) => {
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
export default settingsReducer