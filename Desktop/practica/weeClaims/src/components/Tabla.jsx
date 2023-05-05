import "./Formulario.css";
const Tabla = ({ datos }) => {
  const datosPorPracticante = datos.reduce((acumulador, dato) => {
    if (!acumulador[dato.nombre]) {
      acumulador[dato.nombre] = {
        cantidadDatos: 0,
        totalDatos: 0,
        datosOrdenados: []
      };
    }
    
    acumulador[dato.nombre].cantidadDatos += dato.datos.length;
    acumulador[dato.nombre].totalDatos += dato.datos.reduce((acc, val) => acc + val, 0);
    acumulador[dato.nombre].datosOrdenados = [...dato.datos].sort((a, b) => b - a); 
    return acumulador;
  }, {});

  let practicanteConMasDatos = '';
  let practicanteConMenosDatos = '';
  let maximoDatos = -Infinity;
  let minimoDatos = Infinity;

  for (let practicante in datosPorPracticante) {
    const cantidadDatos = datosPorPracticante[practicante].cantidadDatos;
    if (cantidadDatos > maximoDatos) {
      maximoDatos = cantidadDatos;
      practicanteConMasDatos = practicante;
    }
    if (cantidadDatos < minimoDatos) {
      minimoDatos = cantidadDatos;
      practicanteConMenosDatos = practicante;
    }
  }

  return (
   <div className="form-control" >

  
    <table className="table  ">
      
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Practicante</th>
          <th scope="col">Datos ingresados</th>
          <th scope="col">Datos ordenados</th>
          <th scope="col">Total de datos ingresados</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{dato.nombre}</td>
              <td>{dato.datos.join(", ")}</td>
              <td>{datosPorPracticante[dato.nombre].datosOrdenados.join(", ")}</td> 
              <td>{datosPorPracticante[dato.nombre].cantidadDatos}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            <p className="text-center max">Max: ({maximoDatos})  {practicanteConMasDatos}</p>
            <p className="text-center min">Min:({minimoDatos})  {practicanteConMenosDatos}</p>
          </td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
};

export default Tabla;