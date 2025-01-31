import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedalList, updateMedalList } from "../redux/modules/medalList";
import styled from "styled-components";

/** styled component */
const FormContainer = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Input = styled.input`
  width: 150px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ff9d23;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 80%;
  }
`;

/** MedalForm */
const MedalForm = () => {
  // 나라별 메달 state
  const [countryMedal, setCountryMedal] = useState({
    country: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
  });
  const total =
    countryMedal.goldMedal +
    countryMedal.silverMedal +
    countryMedal.bronzeMedal;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCountryMedal((prev) => ({
      ...prev,
      [id]: id === "country" ? value : +value,
    }));
  };

  const medalList = useSelector((state) => state.medalList);
  const dispatch = useDispatch();

  const reset = () => {
    setCountryMedal({
      country: "",
      goldMedal: 0,
      silverMedal: 0,
      bronzeMedal: 0,
    });
  };

  /** UI */
  return (
    <div className="form-container">
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          if (
            medalList.some((medal) => medal.country === countryMedal.country)
          ) {
            alert("이미 등록된 나라입니다");
            return;
          }
          dispatch(addMedalList({ ...countryMedal, total }));
          reset();
        }}
      >
        <label htmlFor="country">
          국가명
          <Input
            type="text"
            id="country"
            required
            placeholder="국가 입력"
            value={countryMedal.country}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="goldMedal">
          금메달
          <Input
            type="number"
            id="goldMedal"
            required
            min={0}
            value={countryMedal.goldMedal}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="silverMedal">
          은메달
          <Input
            type="number"
            id="silverMedal"
            required
            min={0}
            value={countryMedal.silverMedal}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bronzeMedal">
          동메달
          <Input
            type="number"
            id="bronzeMedal"
            required
            min={0}
            value={countryMedal.bronzeMedal}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">추가</Button>
        <Button
          type="button"
          onClick={() => {
            if (
              medalList.some((medal) => medal.country !== countryMedal.country)
            ) {
              alert("등록되지 않은 나라입니다");
              return;
            }

            dispatch(updateMedalList({ ...countryMedal }));
            reset();
          }}
        >
          업데이트
        </Button>
      </FormContainer>
    </div>
  );
};

export default MedalForm;
