import React from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import RadioButton from "./components/RadioButton";

const App = () => {
  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 집계</h1>
      <MedalForm />
      <RadioButton />
      <MedalList />
    </div>
  );
};

export default App;
