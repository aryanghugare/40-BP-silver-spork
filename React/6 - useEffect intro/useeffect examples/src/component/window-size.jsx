import { useEffect } from "react";
export function WindowSize() {
  function onResize(event) {
    console.log(event);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <h1>Window size</h1>;
}
