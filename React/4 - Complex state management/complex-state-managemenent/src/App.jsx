import { useState } from "react";

import "./App.css";
import UncontrolledForm from "./components/form";
import ControlledForm from "./components/controlled-form";

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
    </>
  );
}

export default App;
