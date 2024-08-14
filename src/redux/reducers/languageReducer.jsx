import { SET_LANGUAGE } from "../actions/languageAuth";

const initialState = {
  locale: 'en', // default locale
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        locale: action.payload,
      }

    default:
      return state;
  }
}

export default languageReducer;