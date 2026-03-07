import { useState } from "react";
// ui = fn(state);
// let fruits = ["apple", "orange"];
// let [fruit1, fruit2] = fruits;
export default function Counter() {
  //   const state = useState(1);
  //   let count = state[0]; // state variable
  // maintain state between re-renders
  let [count, setCount] = useState(1);
  console.log(count);
  //   let setCount = state[1]; // updater function which will update the state variable

  //   let text = "hello";
  //   let text2 = "world";
  //   const result = `${text} ${text2}`;
  //   console.log(result);
  return (
    <button
      onClick={() => {
        // updater fn syntax
        setCount((prev) => prev + 1); // 1+1=>2
        setCount((prev) => prev + 1); // prev =2 => 2+ 1=3
        setCount((prev) => prev + 1); // prev = 3 => 3+1 =4
        setCount((prev) => prev + 1); // prev = 4 => 4+1 =5
        // multiple set statements get batched
        // setCount(count + 1); //=> 1+1 =2
        // setCount(count + 1); //=> 1+1 =2
        // setCount(count + 1); //=> 1+1 =2
      }}
    >
      {count}
    </button>
  );
}
