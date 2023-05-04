import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";

const App = () => {
  const [datos, setDatos] = useState([]);

  const agregarDatos = (nombre, arrayDatos) => {
    const datosNuevos = arrayDatos.split(",").map((dato) => parseInt(dato.trim()));
    const nuevoObjeto = { nombre, datos: datosNuevos };
    setDatos([...datos, nuevoObjeto]);
  };

  return (
    <div>
      <h1 className="card-title text-center">WeeClaims</h1>
      <Formulario agregarDatos={agregarDatos} />
      {datos.length > 0 && <Tabla datos={datos} />}
    </div>
  );
};

export default App;