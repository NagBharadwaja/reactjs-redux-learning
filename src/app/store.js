import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import math from "./reducers/mathReducer";
import skill from "./reducers/skillReducer";

export default createStore(combineReducers({ 
	math,
	skill 
}), 
{}, 
applyMiddleware(logger(), thunk, promise()));