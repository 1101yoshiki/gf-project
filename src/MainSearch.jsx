import React from "react";
import "./Main.css";
// import getBySection from "";



export default function MainSearch({ num, getSearchResult }) {
  function getBySection(n) {
    let text = [];
    for (let i = 1; i <= Number(n.num); i++) {
      text.push("user" + i);
    }
    getSearchResult(text);
  }

  return (
    <span>
      <button className="search" onClick={getBySection({ num })}>
        検索
      </button>
    </span>
  );
}