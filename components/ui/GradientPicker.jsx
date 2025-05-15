import React from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { set, unset } from "sanity";

export default function GradientPicker({ value, onChange }) {
  const handleChange = (newGradient) => {
    if (newGradient) {
      onChange(set(newGradient));
    } else {
      onChange(unset());
    }
  };

  return (
    <div>
      <ColorPicker
        value={value || "linear-gradient(90deg, #ff0000, #0000ff)"}
        onChange={handleChange}
      />
      <div
        style={{
          marginTop: "12px",
          height: "40px",
          borderRadius: "6px",
          background: value,
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
