import "./panel.css";

export default function Panel({ title, children, showContent, onShow }) {
  return (
    <section className="panel">
      <h1 className="panel-title">{title}</h1>
      {showContent ? <section className="panel-content">{children}</section> : null}
      <footer className="panel-footer">{!showContent ? <button onClick={onShow}>Show</button> : null}</footer>
    </section>
  );
}
