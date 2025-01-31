import React from "react";

const RadioButton = () => {
  return (
    <div>
      <label htmlFor="goldSort">
        <input type="radio" name="sorting" id="goldSort" />
      </label>
      <label htmlFor="totalSort">
        <input type="radio" name="sorting" id="totalSort" />
      </label>
    </div>
  );
};

export default RadioButton;
