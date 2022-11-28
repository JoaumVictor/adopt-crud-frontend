import React from "react";
import { CgTrash } from "react-icons/cg";

import { Icookie } from "../cardsBox/@types";
import "./style.scss";

interface IcookieCard {
  cookie: Icookie;
  listCookies: Icookie[];
  setCookies: React.Dispatch<React.SetStateAction<Icookie[]>>;
}

export default function CookieCard({
  cookie,
  listCookies,
  setCookies,
}: IcookieCard) {
  const handleDeleteCookie = () => {
    const newListCookies = listCookies.filter(
      (cookieItem: Icookie) => cookieItem.name !== cookie.name
    );
    setCookies(newListCookies);
  };

  return (
    <div className="cardCookie">
      <div className="leftCardCookieBox">
        <img src={cookie.image} alt="cookie" />
      </div>
      <div className="rightCardCookieBox">
        <h4>{cookie.name}</h4>
        <p>{cookie.description}</p>
      </div>
      <div className="trashBox">
        <button onClick={handleDeleteCookie}>
          <CgTrash className="trashIcon" />
        </button>
      </div>
    </div>
  );
}
