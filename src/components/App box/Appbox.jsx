import React from "react";
import AppInput from "../App input/AppInput";
import Appdetail from "../App details/Appdetail";

const Appbox = () => {
  return (
    <div className="app_box">
      <AppInput />
      <Appdetail />
    </div>
  );
};

export default Appbox;
