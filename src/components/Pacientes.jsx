function Pacientes({paciente, setPaciente, eliminarPaciente}) {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  
  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 shadow-xl py-10 px-5 bg-slate-700 rounded-lg" >
          <p className="font-bold mb-3 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
          </p>
          <p className="font-bold mb-3 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
          </p>
          <p className="font-bold mb-3 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
          </p>
          <p className="font-bold mb-3 uppercase">Fecha de Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
          </p>
          <p className="font-bold mb-3 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
          </p>
          <div className="flex justify-between mt-5">
            <button
            type="button"
            className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 font-bold uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
            >
              Editar
            </button>
            <button
            type="button"
            className="py-2 px-10 bg-red-500 hover:bg-red-600 font-bold uppercase rounded-lg"
            onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
    </div>
  )
}

export default Pacientes