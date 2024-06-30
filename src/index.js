import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header><h1 className="weath-head">Weather App</h1></header>
    <Search />
    <footer>
      {" "}
      <div className="link-cont">
        <a
          href="https://github.com/avsangel/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          open-sourced code,
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/avsangel?tab=repositories&ocid=AIDcmmcwpj1e5v_SEM__k_CjwKCAjw4f6zBhBVEiwATEHFVtRDTlvEsi5Kmbtt1GDzKE92CsBoBDIXvKeELijRuxY7kC8ZYM6whhoC4aEQAvD_BwE_k_"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          {" "}
          Alesia Shope
        </a>
        {/* <br /> */}
        <p>Desgined by:

          <a
            href="https://github.com/Divyverma"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {" "}
            Divyansh Verma
          </a>
        </p>
      </div>

    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
