import { Types } from './types';

const initialState = {
  userId: '',
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      const { userId, token } = action.payload.data;
      return {
        ...state,
        userId,
        token,
      };
    case Types.LOGOUT:
      return {
        userId: '',
        token: '',
      };
    default:
      return state;
  }
};

export default reducer;
