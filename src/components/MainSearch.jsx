import React from "react";
import "../style/Main.css";
import { getBySection } from "../functions";

export default function MainSearch({ getSearchResult }) {
  function getSection() {
    const select = document.getElementById("selection").value;
    if (select !== "") {
      if (select.lenght === 1) {
        getBySection(Number(select)).then((res)=>{
          getSearchResult(res);        
        })
      } else {
        getBySection(select).then((res)=>{
          getSearchResult(res);        
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