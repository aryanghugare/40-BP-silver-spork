import "./panel.css";
import { useState } from "react";

export default function Panel({ title, children }) {
  const [showContent, setShowContent] = useState(false);
  function onShowClick() {
    setShowContent(true);
  }
  return (
    <section className="panel">
      <h1 className="panel-title">{title}</h1>
      {showContent ? <section className="panel-content">{children}</section> : null}
      <footer className="panel-footer">
        <button onClick={onShowClick}>Show</button>
      </footer>
    </section>
  );
}
