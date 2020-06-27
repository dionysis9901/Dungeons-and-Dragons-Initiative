import { createAction, handleActions } from "redux-actions";
import { getErrorMessage } from "modules/process";

/**
 * Teachers reducer
 * Handles teachers actions
 */

// ------------------------------------
// Constants
// ------------------------------------
export const TEACHERS_LOADED = "TEACHERS_LOADED";
export const TEACHERS_SUCCESS = "TEACHERS_SUCCESS";
export const TEACHERS_FAILED = "TEACHERS_FAILED";
export const TEACHERS_REQUEST = "TEACHERS_REQUEST";

// ------------------------------------
// Actions
// ------------------------------------
const teachersLoaded = createAction(TEACHERS_LOADED);
const teachersSuccess = createAction(TEACHERS_SUCCESS);
const teachersFailed = createAction(TEACHERS_FAILED);
const teachersRequest = createAction(TEACHERS_REQUEST);

const getTeachers = () => {
  return (dispatch) => {
    dispatch(teachersRequest());
  };
};

// ------------------------------------
// All actions
// ------------------------------------

export const actions = {
  teachersLoaded,
  getTeachers,
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  teachers: [],
  errors: null,
  loading: false,
};

export default handleActions(
  {
    TEACHERS_LOADED: (state) => {
      return {
        ...state,
      };
    },

    TEACHERS_REQUEST: (state) => {
      return { ...initialState, loading: true };
    },

    TEACHERS_SUCCESS: (state, { payload }) => {
      return {
        ...initialState,
        loading: false,
        teachers: payload,
      };
    },

    TEACHERS_FAILED: (state, { payload }) => {
      return {
        ...state,
        errors: payload,
      };
    },
  },
  initialState
);
