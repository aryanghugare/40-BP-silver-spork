import React, { useEffect, useState } from "react";

export default function LifeCyle() {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(`%c Hook with no dependency callback called`, "color:red");

    return () => {
      console.log(`%c Hook no dependency clean up`, "color:green");
    };
  });
  useEffect(() => {
    console.log(`%c Hook [] dependency callback called`, "color:green");

    return () => {
      console.log(`%c Hook [] dependency clean up`, "color:green");
    };
  }, []);

  useEffect(() => {
    console.log(`%c Hook with dependency callback called`, "color:royalblue");

    return () => {
      console.log(`%c Hook with dependency clean up`, "color:royalblue");
    };
  }, [text]);

  console.log("render called");
  return (
    <div>
      LifeCyle
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
