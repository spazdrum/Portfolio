import React from "react";
import Navigation from "./navigation";
import faceicon from "../img/faceicon.png";

export default function Header() {
  return (
    <Header>
      <img src={faceicon} alt="faceicon" />
      <header>
        <Navigation />
      </header>
    </Header>
  );
}
