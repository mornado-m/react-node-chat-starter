export const AUTHORIZE = "APP/AUTHORIZE";
export const LOG_OUT = "APP/LOG_OUT";

interface AuthorizeAction {
  type: typeof AUTHORIZE;
  payload: {
    token: string;
    userId: string;
  };
}

interface LogOutAction {
  type: typeof LOG_OUT;
}

export type AuthorizationAction = AuthorizeAction | LogOutAction;
