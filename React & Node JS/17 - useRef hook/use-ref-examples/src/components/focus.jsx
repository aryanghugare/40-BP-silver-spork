import React from "react";
import { useRef } from "react";

export default function Focus() {
  // used for dom manipulation
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus me</button>
    </>
  );
}
