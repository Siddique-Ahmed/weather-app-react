import React, { useState, useContext } from "react";
import "../../App.css";
import { MyContext } from "../../App";

const AppInput = () => {
  const { search } = useContext(MyContext);
  const [city, setCity] = useState("");

  const handleInput = () => {
    search(city);
    setCity("")
  };

  return (
    <div className="input_box">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter City Name"
      />
      <button onClick={handleInput} className="fa-solid fa-magnifying-glass"></button>
    </div>
  );
};

export default AppInput;
