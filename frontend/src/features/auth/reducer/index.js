// Initial state for the auth reducer
const initialState = {
    user: null,
    error: null,
    isLoading: false,
    isAuthenticated: false,
  };
  
  // Auth reducer function
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        };
      case 'REGISTER_FAIL':
      case 'LOGIN_FAIL':
      case 'FORGOT_PASSWORD_FAILURE':
      case 'RESET_PASSWORD_FAILURE':
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case 'FORGOT_PASSWORD_REQUEST':
      case 'RESET_PASSWORD_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FORGOT_PASSWORD_SUCCESS':
      case 'RESET_PASSWORD_SUCCESS':
        return {
          ...state,
          isLoading: false,
          error: null,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  