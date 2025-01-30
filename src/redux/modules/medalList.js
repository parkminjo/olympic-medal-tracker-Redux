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

export const deleteMedalList = (payload) => {
  return {
    type: DELETE_MEDAL,
    payload,
  };
};

export const medalList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDAL:
      return [...state, action.payload];
    case DELETE_MEDAL:
      return [...state].filter((medal) => medal.country !== action.payload);
    default:
      return state;
  }
};
