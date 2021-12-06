const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userId: "",
  isLoggedIn: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_FIRST_NAME":
      return {
        ...state,
        firstName: action.firstName,
      };
    case "SET_USER_LAST_NAME":
      return {
        ...state,
        lastName: action.lastName,
      };
    case "SET_USER_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "SET_USER_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.userId,
      };
    case "SET_USER_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default authReducer;
