import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
  
  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen md:overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
            <span className="font-bold text-indigo-500">Pacientes y Citas</span>
            </p>
   
            {pacientes.map((paciente) => (

              <Pacientes
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}

              />
              ))}
          </>
          
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza agrengando pacientes {''}
            <span className="font-bold text-indigo-500">y aparecerán en este lugar</span>
            </p>
          </>
        )}
        
        
        
    </div>
  )
}

export default ListadoPacientes