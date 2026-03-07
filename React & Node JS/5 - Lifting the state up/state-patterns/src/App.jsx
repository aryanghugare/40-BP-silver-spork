import { useState } from "react";
import "./App.css";
import Accordion from "./component/accordion";
import Input from "./component/input";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Accordion title="Accordion Title" />;
      <Input value={value} onChange={setValue} />
      <Input value={value} onChange={setValue} />
    </>
  );
}

export default App;
