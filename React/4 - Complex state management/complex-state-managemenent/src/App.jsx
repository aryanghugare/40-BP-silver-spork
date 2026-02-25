import { useState } from "react";

import "./App.css";
import UncontrolledForm from "./components/form";
import ControlledForm from "./components/controlled-form";
import StateForm from "./components/state-with-object";
import SingleChangeHandlerForm from "./components/single-change-handler";

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <StateForm />
      <SingleChangeHandlerForm />
    </>
  );
}

export default App;
