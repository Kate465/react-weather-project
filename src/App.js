import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Katego and is {""}
          <a href="https://github.com/Kate465/react-weather-project">
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
