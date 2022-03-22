import React from "react";
//functional component
import NavBar from './components/NavBar.js'
//class component
import Content from "./components/content.js";


function App() {

 const navBarName ='Vw'

  return (
    <div className="App">
      <NavBar navName={navBarName} />
      <Content />

     
    </div>

   
  );
}

export default App;
