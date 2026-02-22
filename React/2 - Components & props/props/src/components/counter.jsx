import React, { useState } from "react";
// ui = fn(state);
// let fruits = ["apple", "orange"];
// let [fruit1, fruit2] = fruits;
export default function Counter() {
  //   const state = useState(1);
  //   let count = state[0]; // state variable
  //   console.log(count);
  let [count, setCount] = useState(1);
  //   let setCount = state[1]; // updater function which will update the state variable

  //   let text = "hello";
  //   let text2 = "world";
  //   const result = `${text} ${text2}`;
  //   console.log(result);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
