import React from "react";
import "../style/Main.css";

export default function MainShowList({ searchResult }) {
  // console.log(searchResult);
    const lists = Array.from(searchResult).map((elem, index) => (
      <li key={index}>
        {elem}
      </li>
    ));

  return (
    <div className="show-list">
      {lists}
    </div>
  );
}