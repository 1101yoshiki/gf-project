import React from "react";
import "./Main.css";

export default function MainSelect() {
  return (
    <span>教えてほしいこと :
      <select className="pull-down">
        <option value="">選択して下さい</option>
        <option value="0">非同期</option>
        <option value="1">React</option>
        <option value="2">Closure</option>
        <option value="3">Node</option>
        <option value="4">TypeScript</option>
        <option value="5">Express</option>
        <option value="6">Database</option>
        <option value="7">DOM</option>
        <option value="8">knex</option>
      </select>
    </span>
  );
}