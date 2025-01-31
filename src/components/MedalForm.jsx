import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedalList, updateMedalList } from "../redux/modules/medalList";

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

  return (
    <div className="form-container">
      <form
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
          <input
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
          <input
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
          <input
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
          <input
            type="number"
            id="bronzeMedal"
            required
            min={0}
            value={countryMedal.bronzeMedal}
            onChange={handleChange}
          />
        </label>
        <button type="submit">추가</button>
        <button
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
        </button>
      </form>
    </div>
  );
};

export default MedalForm;
