import Panel from "./panel";
import "./accordion.css";
export default function Accordion({ title }) {
  return (
    <section className="accordion">
      <h1 className="accordion-title">{title}</h1>
      <Panel title={"Panel 1"}>this is the content for panel 1</Panel>
      <Panel title={"Panel 2"}>this is the content for panel 2</Panel>
    </section>
  );
}
