import { combineReducers } from "redux";
import authorizationReducer, {
  AuthorizationState,
} from "./authorization/authorization.reducer";

export interface AppState {
  auth: AuthorizationState;
}

const rootReducer = combineReducers({
  auth: authorizationReducer,
});

export default rootReducer;
