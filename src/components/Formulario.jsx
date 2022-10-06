import {useState, useEffect} from "react"
import Error from "./Error"
function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      const {nombre, propietario, email, fecha, sintomas} = paciente
      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
    }
  }, [paciente])
  

  const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2)
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validar formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }  
    setError(false)

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }
    
    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    } else{
      //Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }
    //Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2  lg:w-2/5" >
        <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {' '}
            <span className="text-indigo-500 font-bold ">Administralos</span>
        </p>
        <form onSubmit={handleSubmit} className="mx-5 bg-slate-700 shadow-xl rounded-md py-10 px-5 mb-5">   

          {error && <Error><p>Todos los campos son obligatorios</p></Error>}

          <div className="mb-5">
            <label htmlFor="mascota" className="block uppercase font-bold">
              Nombre Mascota 
            </label>
            <input 
            
            id="mascota"
            className=' rounded-md w-full p-2 mt-2 bg-slate-600 border-2 border-slate-800'
            type="text"
            placeholder="Nombre de la mascota" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="propietario" className="block uppercase font-bold">
              Nombre propietario 
            </label>
            <input 
            
            id="propietario"
            className=' rounded-md w-full p-2 mt-2 bg-slate-600 border-2 border-slate-800'
            type="text"
            placeholder="Nombre del propietario" 
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            />
            
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block uppercase font-bold">
              Email 
            </label>
            <input 
            
            id="email"
            className=' rounded-md w-full p-2 mt-2 bg-slate-600 border-2 border-slate-800'
            type="email"
            placeholder="Email Contacto Propietario" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block uppercase font-bold">
              Alta
            </label>
            <input 
            
            id="alta"
            className=' rounded-md w-full p-2 mt-2 bg-slate-600 border-2 border-slate-800'
            type="date" 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
            
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block uppercase font-bold">
              Alta
            </label>
            <textarea
              
              id="sintomas"
              className=' rounded-md w-full p-2 mt-2 bg-slate-600 border-2 border-slate-800'
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>
          <input 
            type='submit'
            className="bg-indigo-600 w-full p-3 text uppercase font-bold   hover:bg-indigo-700 cursor-pointer transition-colors"
            value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
          />
        </form>
    </div>
  )
}

export default Formulario