import { Types } from './types';

export const ActionCreators = {
  login: (data) => {
    localStorage.setItem('token', data.token);
    return { type: Types.LOGIN, payload: { data } };
  },
  logout: () => {
    localStorage.removeItem('token');
    return { type: Types.LOGOUT, payload: {} };
  },
};
