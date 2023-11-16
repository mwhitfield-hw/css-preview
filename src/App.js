import logo from "./logo.svg";
import "./App.css";
import ColorSelectorPreview from "./ColorSelectorPreview";
import { useState } from "react";
import FontSelectorPreview from "./FontSelectorPreview";

function App() {
  const [colors, setColors] = useState([
    { label: "Primary", value: "#0d8484" },
    { label: "Primary Light", value: "#cfe6e6" },
    { label: "Neutral", value: "#727272" },
    { label: "Dark", value: "#262626" },
  ]);

  const [fontSize, setFontSize] = useState("1.5rem");
  const [defaultFont, setDefaultFont] = useState("serif");
  const [decorativeFont, setDecorativeFont] = useState("cursive");

  const handleSetFontSize = (event) => {
    setFontSize(event.target.value);
  };

  const handleDefaultFontChange = (event) => {
    setDefaultFont(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        Preview Stuff
        {colors.map((color) => (
          <ColorSelectorPreview
            label={color.label}
            value={color.value}
          ></ColorSelectorPreview>
        ))}
        <FontSelectorPreview
          fontSize={fontSize}
          defaultFont={defaultFont}
          decorativeFont={decorativeFont}
        ></FontSelectorPreview>
        <select onChange={handleDefaultFontChange}>
          <option value="Roboto">Roboto</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Roboto Slab">Roboto Slab</option>
        </select>
        <select onChange={handleSetFontSize}>
          <option value="1rem">1rem</option>
          <option value="2rem">2rem</option>
          <option value="3rem">3rem</option>
        </select>
      </header>
    </div>
  );
}

export default App;
