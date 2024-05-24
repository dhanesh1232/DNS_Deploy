import React from "react";

const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", background: "gray" }}
    onClick={onClick}
  />
);

export default CustomArrow;
