import React from "react";
import "./Main.css";
import MainContents from "./MainContents";
import MainHeader from "./MainHeader";
import MainSidebarL from "./MainSidebarL";
import MainSidebarR from "./MainSidebarR";

export default function Main() {
  return (
    <>
      <div>
        <MainHeader />
      </div>
      <div className="main_cell">
        <MainSidebarL />
        <MainContents />
        <MainSidebarR />
      </div>
    </>
  );
}