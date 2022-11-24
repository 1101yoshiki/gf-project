import React from "react";
import "../style/Main.css";

export default function Logout({ setScreen }) {
  function logout() {
    setScreen("entry");
  }

  return (
    <p>
      <button type="button" className="logout" onClick={logout}>
        ログアウト
      </button>
    </p>
  );
}