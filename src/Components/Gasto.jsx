import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

function Gasto({gasto}) {

    return (
        <Fragment>
            <li className="gastos-realizados">
                <p>
                    {gasto.nombre}
                    <span className="gasto">S./{gasto.cantidad}</span>
                </p>
            </li>
        </Fragment>
    )
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}


export default Gasto;
