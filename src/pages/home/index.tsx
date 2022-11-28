import React from "react";
import CardsBox from "../../components/cardsBox";
import "./style.scss";

export default function Home() {
  return (
    <div className="container-home">
      <div className="middle-box">
        <p className="title">Adopt Cookies</p>
        <CardsBox />
      </div>
    </div>
  );
}
