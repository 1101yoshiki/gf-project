import React from "react";
import "../style/Main.css";
import Logout from "./Logout";
const apliName = "Dinder";

export default function MainHeader({ setScreen }) {
  return (
    <div className="header">
      <div>{apliName}</div>
      <Logout setScreen={setScreen} />
    </div>
  );
}