import logo from "./logo.svg";
import "./App.css";
import ColorSelectorPreview from "./ColorSelectorPreview";
import { useState } from "react";
import FontSelectorPreview from "./FontSelectorPreview";
import HeaderPreview from "./HeaderPreview";

function App() {
  const [colors, setColors] = useState([
    { label: "Primary", value: "#0d8484" },
    { label: "Primary Light", value: "#cfe6e6" },
    { label: "Neutral", value: "#727272" },
    { label: "Dark", value: "#262626" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderPreview colors={colors} backgroundColor="red"></HeaderPreview>
        {colors.map((color) => (
          <ColorSelectorPreview
            label={color.label}
            value={color.value}
          ></ColorSelectorPreview>
        ))}
        <FontSelectorPreview></FontSelectorPreview>
      </header>
    </div>
  );
}

export default App;
