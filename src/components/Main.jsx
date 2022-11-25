import React from "react";
import "../style/Main.css";
import MainContents from "./MainContents";
import MainHeader from "./MainHeader";
import MainSidebarL from "./MainSidebarL";
import MainSidebarR from "./MainSidebarR";

export default function Main({ setScreen, loginUser }) {
  return (
    <>
      <div>
        <MainHeader setScreen={setScreen} />
      </div>
      <div className="main_cell">
        <MainSidebarL loginUser={loginUser} />
        <MainContents loginUser={loginUser} />
        <MainSidebarR />
      </div>
    </>
  );
}