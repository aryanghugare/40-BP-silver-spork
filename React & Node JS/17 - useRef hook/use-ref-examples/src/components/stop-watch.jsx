import { useRef, useState } from "react";
export default function StopWatch() {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);
  function start() {
    timerId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  function stop() {
    clearInterval(timerId.current);
  }

  return (
    <article className="container">
      <p>{time}</p>
      <footer>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </footer>
    </article>
  );
}
