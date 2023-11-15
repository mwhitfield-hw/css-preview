import logo from "./logo.svg";
import "./App.css";
import ColorSelectorPreview from "./ColorSelectorPreview";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState([
    { label: "Primary", value: "green" },
    { label: "Primary Light", value: "light green" },
    { label: "Secondary", value: "secondary" },
    { label: "Dark", value: "dark" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        {colors.map((color) => (
          <ColorSelectorPreview label={color.label}></ColorSelectorPreview>
        ))}

        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
