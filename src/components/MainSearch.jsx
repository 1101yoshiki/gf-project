import React from "react";
import "../style/Main.css";
import { getBySection } from "../functions";

export default function MainSearch({ getSearchResult, loginUser }) {
  function getSection() {
    const select = document.getElementById("selection").value;
    if (select !== "") {
      if (select.lenght === 1) {
        getBySection(Number(select)).then((res)=>{
          getSearchResult(res.filter((elem) => elem !== loginUser));
        })
      } else {
        getBySection(select).then((res)=>{
          getSearchResult(res.filter((elem) => elem !== loginUser));
        })
      }
    }
  }

  return (
    <span>
      <button className="search" onClick={getSection}>
        検索
      </button>
    </span>
  );
}