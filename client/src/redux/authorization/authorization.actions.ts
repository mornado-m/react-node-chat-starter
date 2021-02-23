import { AuthorizationAction, AUTHORIZE, LOG_OUT } from "./authorization.types";

export function authorize(
  jwtToken: string,
  userId: string
): AuthorizationAction {
  return {
    type: AUTHORIZE,
    payload: {
      token: jwtToken,
      userId: userId,
    },
  };
}

export function logOut(): AuthorizationAction {
  return {
    type: LOG_OUT,
  };
}
