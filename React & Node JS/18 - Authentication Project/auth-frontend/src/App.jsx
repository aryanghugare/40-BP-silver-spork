import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <article className="flex flex-col gap-4 border-2 w-sm p-4 mx-auto">
        <h1 className="text-2xl">This is the heading</h1>
        <p className="text-gray-500 dark:text-slate-700">Some context related to the title</p>
      </article>
    </>
  );
}

export default App;
