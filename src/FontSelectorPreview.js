import { useEffect, useState } from "react";
import FontPicker from "react-fontpicker-ts";
import "react-fontpicker-ts/dist/index.css";

function FontSelectorPreview(props) {
  const [defaultFont, setDefaultFont] = useState("cursive");
  const [decorativeFont, setDecorativeFont] = useState("cursive");
  const [selectedFontSize, setFontSize] = useState("1rem");

  useEffect(() => {
    console.log(defaultFont, decorativeFont, selectedFontSize);
  }, [defaultFont, decorativeFont, selectedFontSize]);

  const handleDefaultFontChange = (event) => {
    setDefaultFont(event.target.value);
  };

  const handleDecorativeFontChange = (event) => {
    setDecorativeFont(event.target.value);
  };

  const handleSetFontSize = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <>
      <div id="font-picker"></div>
      <div>
        <h6
          style={{
            fontFamily: `${defaultFont}`,
          }}
        >
          The quick brown fox
        </h6>
        <p
          style={{
            fontFamily: `${decorativeFont}`,
            fontSize: `${selectedFontSize}`,
          }}
        >
          Jumped over the log
        </p>
      </div>
      <div>
        <div>
          <label style={{ fontSize: "1rem" }}>default font</label>
          <select onChange={handleDefaultFontChange}>
            <option value="cursive">Cursive</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Arial">Arial</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: "1rem" }}>secondary font</label>
          <select onChange={handleDecorativeFontChange}>
            <option value="cursive">Cursive</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Arial">Arial</option>
          </select>
        </div>
        <label style={{ fontSize: "1rem" }}>font size</label>
        <select onChange={handleSetFontSize}>
          <option value="1rem">1rem</option>
          <option value="2rem">2rem</option>
          <option value="3rem">3rem</option>
        </select>
      </div>
    </>
  );
}

export default FontSelectorPreview;
