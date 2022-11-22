import React, { useState } from "react";
import "../style/Main.css";
import MainSelect from "./MainSelect";
import MainSearch from "./MainSearch";
import MainShowList from "./MainShowList";

export default function MainContents() {
  const [searchResult, getSearchResult] = useState([]);

  return (
    <div className="main_contents">
      <MainSelect />
      <MainSearch num="3" getSearchResult={getSearchResult} />
      <MainShowList searchResult={searchResult} />
    </div>
  );
}