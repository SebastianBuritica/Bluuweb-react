import React from "react";
import Saludo from "./components/Saludo";

// import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="container mt-5">
     {/* <Formulario /> */}
     <Saludo persona='Juanito' />
     <Saludo persona='Ignacio' />
     <Saludo persona='Catalina' />
    </div>
  );
}

export default App;
