import { useState } from "react";

import "./App.css";
import UncontrolledForm from "./components/form";
import ControlledForm from "./components/controlled-form";
import StateForm from "./components/state-with-object";
import SingleChangeHandlerForm from "./components/single-change-handler";
import RegistrationForm from "./components/registration-form";
import Todos from "./components/todo-list/todos";

function App() {
  return (
    <>
      {/* <UncontrolledForm />
      <ControlledForm />
      <StateForm />
      <SingleChangeHandlerForm />
      <RegistrationForm /> */}
      <Todos />
    </>
  );
}

export default App;
