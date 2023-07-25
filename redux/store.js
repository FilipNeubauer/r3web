import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers";
import { chatReducer } from "./reducers";

const rootReducer = combineReducers({userReducer, chatReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));