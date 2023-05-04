import { useState } from "react";
import "./Formulario.css";

const Formulario = ({ agregarDatos }) => {
  
  const [nombrePracticante, setNombrePracticante] = useState("");
  const [arrayDatos, setArrayDatos] = useState("");

  const handleNombrePracticante = (event) => {
    setNombrePracticante(event.target.value);
  };

  // const handleArrayDatos = (event) => {
  //   setArrayDatos(event.target.value);
  // };
  const handleArrayDatos = (event) => {
    const { value } = event.target;
    const regex = /^[\d,\s]*$/; 
    if (regex.test(value)) { 
      setArrayDatos(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarDatos(nombrePracticante, arrayDatos);
    setNombrePracticante("");
    setArrayDatos("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Nombre del Practicante: "
          value={nombrePracticante}
          onChange={handleNombrePracticante}
        />
      </div>
      <div id="output"></div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Array de Datos:"
          value={arrayDatos}
          onChange={handleArrayDatos}
          required
        ></input>
      </div>
      
      <button className=" btn-primary form-control">Guardar</button>
      <br />
    </form>
  );
};

export default Formulario;





