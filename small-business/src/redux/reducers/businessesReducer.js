

const initialState = {
    businesses: [], 
  };
  
  const businessesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BUSINESSES':
        return {
          ...state,
          businesses: action.payload,
        };
      // Handle other actions related to businesses here
      default:
        return state;
    }
  };
  
  export default businessesReducer;
  