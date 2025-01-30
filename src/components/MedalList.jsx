import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMedalList } from "../redux/modules/medalList";

const MedalList = () => {
  const medalList = useSelector((state) => state.medalList);
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>합계</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {medalList.map((medal) => {
            const { country, goldMedal, silverMedal, bronzeMedal, total } =
              medal;
            return (
              <tr key={country}>
                <td>{country}</td>
                <td>{goldMedal}</td>
                <td>{silverMedal}</td>
                <td>{bronzeMedal}</td>
                <td>{total}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteMedalList(country));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
