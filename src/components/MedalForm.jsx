import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedalList, updateMedalList } from "../redux/modules/medalList";

const MedalForm = () => {
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);
  const total = goldMedal + silverMedal + bronzeMedal;

  const medalList = useSelector((state) => state.medalList);
  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (medalList.some((medal) => medal.country === country)) {
            alert("이미 등록된 나라입니다");
            return;
          }
          dispatch(
            addMedalList({
              country,
              goldMedal,
              silverMedal,
              bronzeMedal,
              total,
            })
          );
        }}
      >
        <label htmlFor="country">
          국가명
          <input
            type="text"
            id="country"
            required
            placeholder="국가 입력"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label htmlFor="gold">
          금메달
          <input
            type="number"
            id="gold"
            required
            min={0}
            value={goldMedal}
            onChange={(e) => setGoldMedal(+e.target.value)}
          />
        </label>
        <label htmlFor="silver">
          은메달
          <input
            type="number"
            id="silver"
            required
            min={0}
            value={silverMedal}
            onChange={(e) => setSilverMedal(+e.target.value)}
          />
        </label>
        <label htmlFor="bronze">
          동메달
          <input
            type="number"
            id="bronze"
            required
            min={0}
            value={bronzeMedal}
            onChange={(e) => setBronzeMedal(+e.target.value)}
          />
        </label>
        <button type="submit">추가</button>
        <button
          type="button"
          onClick={() => {
            if (medalList.some((medal) => medal.country !== country)) {
              alert("등록되지 않은 나라입니다");
              return;
            }

            dispatch(
              updateMedalList({
                country,
                goldMedal,
                silverMedal,
                bronzeMedal,
              })
            );
          }}
        >
          업데이트
        </button>
      </form>
    </div>
  );
};

export default MedalForm;
