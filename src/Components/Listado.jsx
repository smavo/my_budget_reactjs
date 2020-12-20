import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import Gasto from './Gasto';

function Listado({gastos}) {
    return (
        <Fragment>
            <div className="gastos-realiazados">
                <h2>Lista de Gastos</h2>
                {
                    gastos.map( gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;
