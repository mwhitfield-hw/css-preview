import { useState } from "react";

function ColorSelectorPreview(props) {
  const label = props.label;
  const value = props.value;

  const [selectedColor, setSelectedColor] = useState(value);

  const handleSelectedColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleInputColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
      <div>
        <div>
          <label style={{ fontSize: "1.5rem" }}>{label}</label>
        </div>
        <input
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
