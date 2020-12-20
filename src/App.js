import React, { useState, useEffect } from 'react';
import Pregunta from './Components/Pregunta';
import Form from './Components/Form';
import Listado from './Components/Listado';
import Control from './Components/Control';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)


  useEffect( () =>{
    if (crearGasto) {
      //console.log(gasto)

      //Agregar Presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      // Resta Presupuesto
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      // Resetear 
      setCrearGasto(false)
    }
  },[gasto, crearGasto, restante,gastos]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal </h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta
            ? <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            : <div className="row">
                <div className="one-half column">
                  <Form
                    guardarGasto={guardarGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
                <Control
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }

        </div>
      </header>
    </div>
  );
}

export default App;
