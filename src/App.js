import logo from "./logo.svg";
import "./App.css";
import ColorSelectorPreview from "./ColorSelectorPreview";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState([
    { label: "Primary", value: "#0d8484" },
    { label: "Primary Light", value: "#cfe6e6" },
    { label: "Nuetral", value: "#727272" },
    { label: "Dark", value: "#262626" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        {colors.map((color) => (
          <ColorSelectorPreview
            label={color.label}
            value={color.value}
          ></ColorSelectorPreview>
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
