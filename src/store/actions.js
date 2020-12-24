import { Types } from './types';

export const ActionCreators = {
  login: (data) => ({ type: Types.LOGIN, payload: { data } }),
};
