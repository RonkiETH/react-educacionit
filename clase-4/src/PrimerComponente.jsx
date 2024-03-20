const string = "Curso de React"
const number = 123456
const array = ["Curso de React", "Miércoles y Viernes"]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: "Curso de React", duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h4>Variable de tipo String: <span>{string}</span></h4>
      <h4>Variable de tipo Number: <span>{number}</span></h4>
      <h4>Variable de tipo Boolean: <span>{boolean}</span></h4>
      <h4>Variable de tipo Array: <span>{array}</span></h4>
      <h4>Variable de tipo Función: <span>{funcion()}</span></h4>
      <h4>Variable de tipo Objeto: <span>{JSON.stringify(objeto)}</span></h4>
      <h4>Variable de tipo Fecha: <span>{JSON.stringify(fecha)}</span></h4>
    </>
  )
}
