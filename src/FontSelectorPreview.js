import { useEffect, useState } from "react";
import FontPicker from "react-fontpicker-ts";
import "react-fontpicker-ts/dist/index.css";

function FontSelectorPreview(props) {
  const [defaultFont, setDefaultFont] = useState("serif");
  const [decorativeFont, setDecorativeFont] = useState("cursive");
  const [selectedFontSize, setFontSize] = useState("1rem");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(selectedFontSize);
  }, [selectedFontSize]);

  const handleDefaultFontChange = (event) => {
    setDefaultFont(event.target.value);
  };

  const handleDecorativeFontChange = (event) => {
    setDecorativeFont(event.target.value);
  };

  const defaultFontStyle = {
    fontSize: { selectedFontSize },
    font: { defaultFont },
  };

  return (
    <>
      <div id="font-picker"></div>
      <h3 style={{ fontFamily: `${props.defaultFont}` }}>
        The quick brown fox
      </h3>
      <p style={{ fontFamily: `${props.decorativeFont}` }}>
        Jumped over the log
      </p>
      <p>{defaultFont ? defaultFont : "pick a font"}</p>
      <div>
        <label style={{ fontSize: `${props.fontSize}` }}>default font</label>
        <select onChange={handleDefaultFontChange}>
          <option value="Roboto">Roboto</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Roboto Slab">Roboto Slab</option>
        </select>
        <label>secondary font</label>

        <select onChange={handleDecorativeFontChange}>
          <option value="Roboto">Roboto</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Roboto Slab">Roboto Slab</option>
        </select>
      </div>
    </>
  );
}

export default FontSelectorPreview;
