import PropTypes from 'prop-types'
import { useState } from 'react'

export const Contador = ({value}) => {

    const [contador, setContador] = useState(value)

    const handleClick = () => {
        setContador(contador + 1)
        console.log(value)
    }

    return (
        <>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>Click aquí</button>
        </>
    )
}

Contador.propTypes = {
    value: PropTypes.number.isRequired
}
