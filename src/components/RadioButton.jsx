import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortMedal } from "../redux/modules/medalList";

const RadioButton = () => {
  const [sortType, setSortType] = useState("goldSort");

  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="goldSort">
        <input
          type="radio"
          name="sorting"
          id="goldSort"
          value="goldSort"
          checked={sortType === "goldSort"}
          onChange={(e) => {
            dispatch(sortMedal(e.target.value));
            setSortType("goldSort");
          }}
        />{" "}
        금메달순
      </label>
      <label htmlFor="totalSort">
        <input
          type="radio"
          name="sorting"
          id="totalSort"
          value="totalSort"
          checked={sortType === "totalSort"}
          onChange={(e) => {
            dispatch(sortMedal(e.target.value));
            setSortType("totalSort");
          }}
        />{" "}
        합계순
      </label>
    </div>
  );
};

export default RadioButton;
