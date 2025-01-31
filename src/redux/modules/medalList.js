const initialState = [];

// action type
const ADD_MEDAL = "ADD_MEDAL";
const DELETE_MEDAL = "DELETE_MEDAL";
const UPDATE_MEDAL = "UPDATE_MEDAL";
const SORT_MEDAL = "SORT_MEDAL";

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

export const updateMedalList = (payload) => {
  return {
    type: UPDATE_MEDAL,
    payload,
  };
};

export const sortMedal = (payload) => {
  return {
    type: SORT_MEDAL,
    payload,
  };
};

// reducer
export const medalList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDAL:
      return [...state, action.payload];
    case DELETE_MEDAL:
      return [...state].filter((medal) => medal.country !== action.payload);
    case UPDATE_MEDAL:
      return [...state].map((medal) => {
        const { country, goldMedal, silverMedal, bronzeMedal } = action.payload;
        if (medal.country === country) {
          return { ...medal, goldMedal, silverMedal, bronzeMedal };
        } else {
          return medal;
        }
      });
    case SORT_MEDAL:
      if (action.payload === "goldSort") {
        return [...state].sort((a, b) => b.goldMedal - a.goldMedal);
      } else {
        return [...state].sort((a, b) => b.total - a.total);
      }
    default:
      return state;
  }
};
