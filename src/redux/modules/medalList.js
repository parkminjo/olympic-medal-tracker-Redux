const initialState = [];

// action type
const ADD_MEDAL = "ADD_MEDAL";
const DELETE_MEDAL = "DELETE_MEDAL";
const UPDATE_MEDAL = "UPDATE_MEDAL";
const SORT_GOLD_MEDAL = "SORT_GOLD_MEDAL";
const SORT_TOTAL_MEDAL = "SORT_TOTAL_MEDAL";

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

export const sortGoldMedal = () => {
  return {
    type: SORT_GOLD_MEDAL,
  };
};
export const sortTotalMedal = (payload) => {
  return {
    type: SORT_TOTAL_MEDAL,
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
    case SORT_GOLD_MEDAL:
      return [...state].sort((a, b) => b.goldMedal - a.goldMedal);
    default:
      return state;
  }
};
