import React, { Fragment, useState }  from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid'
import Error from './Error';

function Form({guardarGasto,setCrearGasto}) {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = (e) =>{
        e.preventDefault();

         //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        // Todo Ok
        guardarError(false);

        // Construir Gasto
        const gasto = {
            nombre : nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }
        //console.log(gasto);

        //Pasar el gasto al comp. princ.
        guardarGasto(gasto)

        // Resetar form
        guardarNombre('');
        guardarCantidad(0);
        setCrearGasto(true)

    }

    return (
        <Fragment>
            <form  onSubmit={agregarGasto} >
                <h2>Agregar Gastos</h2>
                <div className="campo">
                    <label>Nombre del Gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Gym"
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 100"
                        value={cantidad}
                        onChange={e => guardarCantidad(parseInt(e.target.value))}
                    />
                </div>

                { error ? <Error mensaje="Ambos campos son Obligatorios"/>  : null }

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    setCrearGasto:  PropTypes.func.isRequired
}

export default Form;
