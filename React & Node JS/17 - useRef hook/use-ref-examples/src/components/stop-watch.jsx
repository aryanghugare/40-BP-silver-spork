import { useRef, useState } from "react";
export default function StopWatch() {
  // useRef - value is persisted between re-renders
  // you need to read and write on the current values. Ex - timerId.current = 0;
  // updating a ref value will not trigger a re-render.
  // do not use this value on the UI. If you need to show something on the UI - useState hook
  // should be used
  const [time, setTime] = useState(0);
  const timerId = useRef(null);
  function start() {
    timerId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  function stop() {
    clearInterval(timerId.current);
    timerId.current = undefined;
  }

  return (
    <article className="container">
      <p>{time}</p>
      <footer>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        {/*❌ <p>TimerId:{timerId.current}</p> */}
      </footer>
    </article>
  );
}
