import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMedalList } from "../redux/modules/medalList";
import styled from "styled-components";

/** styled component */
const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  border-collapse: collapse;
  border-style: hidden;
`;

const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: #e1e5e9;
  }
  &:nth-child(2n-1) {
    background-color: #f8f9fa;
  }
  &:hover {
    box-shadow: 0 0 0 2px #2a2c2e inset;
  }
`;

const Th = styled.th`
  background-color: #543a14;
  color: white;

  width: 220px;
  height: 45px;
  text-align: center;
  border: none;
`;
const Td = styled.th`
  width: 220px;
  height: 45px;
  text-align: center;
  border: none;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #fb4141;
  padding: 8px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

/** MedalList */
const MedalList = () => {
  const medalList = useSelector((state) => state.medalList);
  const dispatch = useDispatch();

  /** UI */
  return (
    <div>
      <TableContainer>
        <thead>
          <tr>
            <Th>국가명</Th>
            <Th>금메달</Th>
            <Th>은메달</Th>
            <Th>동메달</Th>
            <Th>합계</Th>
            <Th>액션</Th>
          </tr>
        </thead>
        <tbody>
          {medalList.map((medal) => {
            const { country, goldMedal, silverMedal, bronzeMedal, total } =
              medal;
            return (
              <Tr key={country}>
                <Td>{country}</Td>
                <Td>{goldMedal}</Td>
                <Td>{silverMedal}</Td>
                <Td>{bronzeMedal}</Td>
                <Td>{total}</Td>
                <Td>
                  <Button
                    onClick={() => {
                      dispatch(deleteMedalList(country));
                    }}
                  >
                    삭제
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </TableContainer>
    </div>
  );
};

export default MedalList;
