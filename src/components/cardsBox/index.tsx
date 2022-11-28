import React, { useEffect, useState } from "react";

import "./style.scss";
import { getCookies } from "../../services/cookies";
import { Icookie } from "./@types";
import CookieCard from "./../cookieCard/index";
import ReactLoading from "react-loading";

export default function CardsBox() {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookies] = useState([] as Icookie[]);

  const awaitGetCookies = async () => {
    try {
      setLoading(true);
      const response = await getCookies();
      setCookies(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    awaitGetCookies();
  }, []);

  return (
    <div className="containerCardsBox">
      {loading ? (
        <ReactLoading type="spin" color="#000" height={100} width={100} />
      ) : (
        <div>
          {cookies.map((cookie: Icookie) => (
            <CookieCard
              cookie={cookie}
              listCookies={cookies}
              setCookies={setCookies}
            />
          ))}
        </div>
      )}
    </div>
  );
}
