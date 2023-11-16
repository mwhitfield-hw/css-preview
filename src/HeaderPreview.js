import { useState } from "react";
import logo from "./logo.svg";

function HeaderPreview(props) {
  const [headerColor, setHeaderColor] = useState("#0d8484");
  const [textColor, setTextColor] = useState("#262626");

  const handleHeaderColorChange = (event) => {
    setHeaderColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: `${headerColor}`,
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ color: `${textColor}` }}>Header Text</div>
      </header>

      <div>
        <label style={{ fontSize: "1rem" }}>Set header color</label>
        <select onChange={handleHeaderColorChange}>
          {props.colors.map((color) => (
            <option value={color.value}>{color.label}</option>
          ))}
        </select>
        <label style={{ fontSize: "1rem" }}>Set header text color</label>
        <select onChange={handleTextColorChange}>
          {props.colors.map((color) => (
            <option value={color.value}>{color.label}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default HeaderPreview;
