const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "AddUser":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
