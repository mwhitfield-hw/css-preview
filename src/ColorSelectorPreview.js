import { useState } from "react";

function ColorSelectorPreview(props) {
  const colors = props.colors;

  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectedColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleInputColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
      <div>
        <label style={{ fontSize: ".5em" }}>{props.label}</label>
        <input
          label="primary"
          type="color"
          onChange={handleSelectedColorChange}
          value={selectedColor}
        ></input>
        <input
          type="text"
          style={{ height: "1.7em" }}
          value={selectedColor}
          onChange={handleInputColorChange}
        ></input>
      </div>
    </>
  );
}

export default ColorSelectorPreview;
