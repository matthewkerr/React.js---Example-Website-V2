import * as actionTypes from '../Actions/actions';
  
  const initialState = {
    loading: false,
    message: '',
    errMessage: ''
  }
  export default function contactReducer(state=initialState, action) {
    switch(action.type) {
      case actionTypes.SEND_MAIL_REQUEST:
        return {
          ...state,
          loading: true,
          message: '',
          errMessage: ''
        };
      case actionTypes.SEND_MAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload.message,
          errMessage: ''
        };
      case actionTypes.SEND_MAIL_FAILED:
        return {
          ...state,
          loading: false,
          message: '',
          errMessage: action.payload
          };
      default:
        return state
    }
  }