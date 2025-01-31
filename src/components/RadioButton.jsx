import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortMedal } from "../redux/modules/medalList";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 2rem;
`;

const RadioButton = () => {
  const [sortType, setSortType] = useState("goldSort");

  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="goldSort">
        <Input
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
        <Input
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
