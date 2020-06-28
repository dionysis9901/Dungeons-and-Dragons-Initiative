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
  loading: true,
};

export default handleActions(
  {
    STORE_PLAYERS: (state, { payload }) => {
      return {
        ...initialState,
        players: payload,
      };
    },
    STORE_MOBS: (state, { payload }) => {
      return {
        ...initialState,
        mobs: payload,
      };
    },
  },
  initialState
);
