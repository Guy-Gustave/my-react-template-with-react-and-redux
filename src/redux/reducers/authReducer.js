const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'LOGIN_SUCCESS':
      return {
        loading: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
      };
    
    case 'LOGIN_FAILURE':
      return{
        ...state,
        loading: false,
        error: action.payload
      };

      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          user: null,
        };

      default:
        return state
  }
};

export default authReducer