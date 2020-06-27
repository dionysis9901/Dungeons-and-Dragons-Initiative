/**
 * Combine reducers
 */

import { combineReducers } from "redux";
import process from "./process";
import settings from "./settings";

export default combineReducers({
  process,
  settings,
});
