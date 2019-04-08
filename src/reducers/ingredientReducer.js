//  the reducer receives the action and modifies the state
const ingredientReducer = (state = initialState, action) => {
    switch(action.type){
        case 'BASE':
            return 
        case 'PROTEIN':
            return //Object.assign({}, state, {mealPreference : state.mealPreference = 'isMeat'})
        case 'VITAMIN':
            return 
        case 'SAUCE':
            return   
        default: 
            return state
    }
}
export default ingredientReducer