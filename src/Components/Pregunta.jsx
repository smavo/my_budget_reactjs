import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error';

function Pregunta({guardarPresupuesto, guardarRestante, actualizarPregunta}) {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = (e) => {
        //console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Todo Ok
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false)
    }

    return (
        <Fragment>
            <h2>Ingrese su presupuesto</h2>
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingrese el monto de su presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="presupuesto"
                />
                { error ? <Error mensaje="El Presupuesto es incorrecto"/>  : null }
            </form>
        </Fragment>
    )
}

Pregunta.prototype = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarCantidad: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;
