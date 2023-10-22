import "./App.css";
import shoppingIcon from "./assets/shopping-icon.svg";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping-icon" />
        <h1 className="nav-title">Shoping List</h1>
      </nav>
      <section className="container">
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="List"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="add-button" type="button">
            add
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
