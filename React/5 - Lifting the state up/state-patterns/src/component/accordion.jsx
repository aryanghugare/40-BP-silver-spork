import Panel from "./panel";
import "./accordion.css";
import { useState } from "react";
export default function Accordion({ title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="accordion">
      <h1 className="accordion-title">{title}</h1>
      <Panel title={"Panel 1"} showContent={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        this is the content for panel 1
      </Panel>
      <Panel title={"Panel 2"} showContent={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        this is the content for panel 2
      </Panel>
    </section>
  );
}
