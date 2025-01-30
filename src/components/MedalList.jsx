import React from "react";
import { useSelector } from "react-redux";

const MedalList = () => {
  const medalList = useSelector((state) => state.medalList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default MedalList;
