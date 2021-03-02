import { UserActionTypes } from './user.types';

export const userAuthorized = (user) => ({
  type: UserActionTypes.USER_AUTHORIZED,
  payload: user,
});
