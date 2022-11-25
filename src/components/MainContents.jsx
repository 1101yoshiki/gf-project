import React, { useState } from "react";
import "../style/Main.css";
import MainSelect from "./MainSelect";
import MainSearch from "./MainSearch";
import MainShowList from "./MainShowList";

export default function MainContents({ loginUser }) {
  const [searchResult, getSearchResult] = useState([]);

  return (
    <div className="main_contents">
      <MainSelect />
      <MainSearch getSearchResult={getSearchResult} loginUser={loginUser} />
      <MainShowList searchResult={searchResult} />
    </div>
  );
}