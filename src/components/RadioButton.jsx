import React from "react";
import { useDispatch } from "react-redux";
import { sortGoldMedal } from "../redux/modules/medalList";

const RadioButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="goldSort">
        <input
          type="radio"
          name="sorting"
          id="goldSort"
          value="goldSort"
          onChange={() => dispatch(sortGoldMedal())}
        />{" "}
        금메달순
      </label>
      <label htmlFor="totalSort">
        <input type="radio" name="sorting" id="totalSort" value="totalSort" />{" "}
        합계순
      </label>
    </div>
  );
};

export default RadioButton;
