import React, { useState } from "react";
import ClassForm from "./Form/ClassForm";
import FormHook from "./FormBootstrap/FormHook";
import ClassState from "./State components/ClassState";
import ClassState1 from "./State components/ClassState@";
import FunctionState from "./State components/FunctionState";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayUsers from "./FormBootstrap/DisplayUsers";

function App() {
  const [persons, setPerson] = useState([
    {
      name: "Carl ",
      description: "Likes to Code",
    },
    {
      name: "Andrew",
      description: "likes to party",
    },
  ]);

  const updateState = (userName, userDescription) => {
    const newPerson = {
      name: userName,
      description: userDescription,
    };
    setPerson([...persons, newPerson]);
  };
  console.log(persons);
  return (
    <>
      <FormHook receiveState={updateState} />
      <DisplayUsers sendState={persons} />
    </>
  );
}

export default App;
