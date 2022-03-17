const initalState = {
  count: 0,
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER": {
      const count = state.count + action.payload;
      if (count > 10) return state;
      return {
        ...state,
        count,
      };
    }
    case "DECREASE_COUNTER": {
      const count = state.count - action.payload;
      if (count < 0) return state;
      return {
        ...state,
        count,
      };
    }
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
