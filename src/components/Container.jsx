import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container w-full h-full max-w-[1200px] mx-auto overflow-hidden px-4 ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  );
}
