const intstate = {
  email: "",
  password: ""
};

export default (state = intstate, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.form;
    case "CLEAR_LOGIN_FORM":
      return null;

    default:
      return state;
  }
};
