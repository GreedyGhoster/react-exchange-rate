import React from "react";
import "/public/Style.css";
import { useEffect, useState } from "react";
import { Block } from "./components/Block";

export default function App() {
  const [rates, setRates] = useState({});
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении курса валют");
      });
  }, []);
  console.log(rates.USD);
  return (
    <div className="App">
      <Block
        value={0}
        currency="RUB"
        onChangeCurrency={(cur) => console.log(cur)}
      />
      <Block value={0} currency="USD" />
    </div>
  );
}
