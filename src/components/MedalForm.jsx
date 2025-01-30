import React, { useState } from "react";
import { useDispatch } from "react-redux";

const MedalForm = () => {
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_MEDAL",
            payload: {
              country,
              goldMedal,
              silverMedal,
              bronzeMedal,
            },
          });
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
            onChange={(e) => setGoldMedal(e.target.value)}
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
            onChange={(e) => setSilverMedal(e.target.value)}
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
            onChange={(e) => setBronzeMedal(e.target.value)}
          />
        </label>
        <button type="submit">추가</button>
        <button type="button">업데이트</button>
      </form>
    </div>
  );
};

export default MedalForm;
