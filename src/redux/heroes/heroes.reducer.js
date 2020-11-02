const INITIAL_STATE = {
   heroes: []
}

const heroesReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'SET_HEROES':
         return {
            ...state,
            heroes: action.payload
         }
      default:
         return state;
   }
}

export default heroesReducer;