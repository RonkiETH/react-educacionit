import PropTypes from 'prop-types';

export const SegundoComponente = ({titulo1, titulo2 = 2024}) => {
  return (
    <>
      <h2>{titulo1}</h2>
      <h2>{titulo2 + 1}</h2>
    </>
  )
}

SegundoComponente.propTypes = {
  titulo1: PropTypes.string.isRequired,
  titulo2: PropTypes.number.isRequired
}

SegundoComponente.defaultProps = {
  titulo1: "Título 1 por defecto",
  titulo2: 2024
}