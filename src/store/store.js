import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/root-reducer";

const middleware = [logger];
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
