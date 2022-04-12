import React, { useState } from "react";
import ClassForm from "./Form/ClassForm";
import FormHook from "./FormBootstrap/FormHook";
import ClassState from "./State components/ClassState";
import ClassState1 from "./State components/ClassState@";
import FunctionState from "./State components/FunctionState";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayUsers from "./FormBootstrap/DisplayUsers";
import PopUpFunctional from "./overView/PopUpFunctional";
import { v4 as uuidv4 } from "uuid";

// const App = () => {
//   return (
//     <div>
//       <PopUpFunctional />
//     </div>
//   );
// };

function App() {
  const [persons, setPerson] = useState([
    {
      name: "Carl ",
      description: "Likes to Code",
      id: uuidv4(),
    },
    {
      name: "Andrew",
      description: "likes to party",
      id: uuidv4(),
    },
  ]);

  const updateState = (userName, userDescription) => {
    const newPerson = {
      name: userName,
      description: userDescription,
      id: uuidv4(),
    };
    setPerson([...persons, newPerson]);
  };

  const deletePerson = (id) => {
    const newPerson = persons.filter((person) => person.id !== id);
    setPerson(newPerson);
  };

  // handle the editing of elements in the array
  const editPerson = (id, editedData) => {
    setPerson(
      persons.map((person) => (person.id === id ? editedData : person))
    );
  };

  console.log(persons);
  return (
    <>
      <FormHook receiveState={updateState} />
      <DisplayUsers
        sendState={persons}
        delete={deletePerson}
        edit={editPerson}
      />
    </>
  );
}

export default App;
