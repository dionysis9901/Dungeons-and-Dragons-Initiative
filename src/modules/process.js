import { createAction, handleActions } from "redux-actions";
// import { openNotification } from "../utils/notification";

// ------------------------------------
// Constants
// ------------------------------------
export const PROCESS_SET = "PROCESS_SET";
export const PROCESS_LOADING = "PROCESS_LOADING";
export const PROCESS_SUCCESS = "PROCESS_SUCCESS";
export const PROCESS_FAILURE = "PROCESS_FAILURE";
export const PROCESS_CLEAR = "PROCESS_CLEAR";

// ------------------------------------
// Actions
// ------------------------------------
const processSet = createAction(PROCESS_SET);
const processLoading = createAction(PROCESS_LOADING);
const processSuccess = createAction(PROCESS_SUCCESS);
const processFailureAction = createAction(PROCESS_FAILURE);
const processClear = createAction(PROCESS_CLEAR);

/*const logError = payload => {
  return (dispatch, getState) => {
    const {user} = getState();

    dispatch(processClear());

    if (
      payload.message &&
      typeof payload.message !== "string" &&
      payload.message.response &&
      payload.message.response.data &&
      payload.type !== "login" &&
      payload.type !== "firebase:init"
    ) {
      logException("PROCESS_FAILURE", {
        TYPE: payload.type,
        ERROR: {...payload.message},
        user: {...user},
        ACCESS_TOKEN: {...AuthService.authObj},
      });
    }

    return dispatch(processFailure(payload));
  };
};*/

const processFailure = (payload) => {
  return (dispatch, getState) => {
    //const {user} = getState();
    // openNotification("error", getErrorMessage(payload.message));
    dispatch(processClear());

    return dispatch(processFailureAction(payload));
  };
};

export const actions = {
  processSet,
  processLoading,
  processSuccess,
  processFailure,
  processClear,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  type: null,
  status: null,
  message: null,
};
export function getErrorMessage(error) {
  let errorMsg = "Some error happened. Please try again later.";
  if (typeof error === "string") {
    errorMsg = error;
  } else if (error && error.response && error.response.data && error.response.data.error_description) {
    errorMsg = error.response.data.error_description;
  } else if (error && error.response && error.response.data && error.response.data.error) {
    if (error && error.response && error.response.data && typeof error.response.data.error === "string") {
      errorMsg = error.response.data.error;
    } else if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.error.propertyErrors &&
      error.response.data.error.propertyErrors.length > 0
    ) {
      //console.log(error.response.data.error);
      error.response.data.error.propertyErrors.map((i) => {
        errorMsg += `${i.relatedProperty}: ${i.message} \n`;
        return i;
      });
      errorMsg = error.response.data.error.propertyErrors[0].message;
    } else {
      errorMsg =
        error && error.response && error.response.data && error.response.data.error
          ? error.response.data.error.message
          : "Some error happened. Please try again later.";
    }
  } else {
    errorMsg =
      error && error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Some error happened. Please try again later.";
  }
  return errorMsg;
}

export default handleActions(
  {
    LOGOUT_SUCCESS: (state) => {
      return { ...initialState };
    },
    PROCESS_SET: (state, { payload }) => {
      return {
        ...state,
        type: payload.type,
        status: payload.status,
        message: payload.message,
      };
    },

    PROCESS_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        status: "done",
        type: payload.type,
        message: payload.message,
      };
    },

    PROCESS_LOADING: (state, { payload }) => {
      return {
        ...state,
        status: "loading",
        type: payload.type,
        message: payload.message,
      };
    },

    PROCESS_FAILURE: (state, { payload }) => {
      return {
        ...state,
        status: "error",
        type: payload.type,
        message: getErrorMessage(payload.message),
      };
    },

    PROCESS_CLEAR: (state, { payload }) => {
      return {
        ...state,
        type: null,
        status: null,
        message: null,
      };
    },

    USER_CLEAR: (state, { payload }) => {
      return {
        ...state,
        type: null,
        status: null,
        message: null,
      };
    },
  },
  initialState
);
