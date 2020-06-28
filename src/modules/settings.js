import { createAction, handleActions } from "redux-actions";
// import { getErrorMessage } from "modules/process";

/**
 * Settings reducer
 * Handles teachers actions
 */

// // ------------------------------------
// // Constants
// // ------------------------------------
export const STORE_PLAYERS = "STORE_PLAYERS";
export const STORE_MOBS = "STORE_MOBS";

// // ------------------------------------
// // Actions
// // ------------------------------------
const storePlayers = createAction(STORE_PLAYERS);
const storeMobs = createAction(STORE_MOBS);

// // ------------------------------------
// // All actions
// // ------------------------------------

export const actions = {
  storePlayers,
  storeMobs,
};

// // ------------------------------------
// // Reducer
// // ------------------------------------

const initialState = {
  players: [],
  mobs: [],
  playersReady: false,
  mobsReady: false,
};

export default handleActions(
  {
    STORE_PLAYERS: (state, { payload }) => {
      return {
        ...state,
        players: payload,
        playersReady: true,
      };
    },
    STORE_MOBS: (state, { payload }) => {
      return {
        ...state,
        mobs: payload,
        mobsReady: true,
      };
    },
  },
  initialState
);
