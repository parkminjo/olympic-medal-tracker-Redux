import React from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

const App = () => {
  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 집계</h1>
      <MedalForm />
      <MedalList />
    </div>
  );
};

export default App;
