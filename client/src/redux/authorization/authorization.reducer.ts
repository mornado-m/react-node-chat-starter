import { AuthorizationAction, AUTHORIZE, LOG_OUT } from "./authorization.types";

export interface AuthorizationState {
  token: string | null;
  userId: string | null;
  isAuthorized: boolean;
}

const initialState: AuthorizationState = {
  token: null,
  userId: null,
  isAuthorized: false,
};

const authorizationReducer = (
  state = initialState,
  action: AuthorizationAction
) => {
  switch (action.type) {
    case AUTHORIZE:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isAuthorized: true,
      };
    case LOG_OUT:
      return { ...state, token: null, userId: null, isAuthorized: false };
    default:
      return state;
  }
};

export default authorizationReducer;
