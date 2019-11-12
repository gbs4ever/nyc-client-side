export default (state = null, action) => {
  let duplicate;
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user;
    case "CLEAR_CURRNET_USER":
      return null;
    case "ADD_PLATES":
      duplicate = state.plates.filter(p => p.number === action.plates.number);
      if (duplicate.length === 0) {
        return { ...state, plates: [...state.plates, action.plates] };
      } else {
        return state;
      }

    default:
      return state;
  }
};
