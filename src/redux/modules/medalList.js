const initialState = [];

// action type
const ADD_MEDAL = "ADD_MEDAL";
const DELETE_MEDAL = "DELETE_MEDAL";

// action creator
export const addMedalList = (payload) => {
  return {
    type: ADD_MEDAL,
    payload,
  };
};

export const deleteMedalList = () => {
  return {
    type: DELETE_MEDAL,
  };
};

export const medalList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDAL:
      return [...state, action.payload];
    default:
      return state;
  }
};
