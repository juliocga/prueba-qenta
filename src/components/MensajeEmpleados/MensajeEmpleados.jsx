import { useSelector } from 'react-redux';
import { 
  selectEmpleadosState, 
  selectEmpleadosSelectedState,
} from "../../features/users/empleadosSlice";
import { getAge } from '../../utils/utils';

function MensajeEmpleados(){

  const empleadosState = useSelector(selectEmpleadosState);
  const empleadosSelectedState = useSelector(selectEmpleadosSelectedState);

  const empleadosFilter = empleadosState.filter((empleado)=>(
    empleadosSelectedState.some((element)=>element === empleado._id)
  ));

  const getFirstName = (fullName) => {
    return fullName.split(" ").slice(0,1);
  };

  const getHobbie = (hobbies) => {
    return hobbies.split(",").slice(0,1);
  };
  
  return(
    <>
      {empleadosSelectedState.length > 0 ? (
        <>
          <p className="font-bold text-2xl text-center">Mensajes de cumpleaños</p>
          <div className="flex flex-wrap bg-gray-200 justify-center">
          {empleadosFilter?.map((empleado) => (
            <div key={empleado._id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4">
              <p className="font-bold">!Feliz cumpleaños {getFirstName(empleado.name)}!</p>
              <p>
                Hoy en tu cumpleaños numero <span className="font-bold">{getAge(empleado.birthday)}</span> sabemos que una de las 
                cosas que te gusta hacer es: <span className="font-bold">{getHobbie(empleado.hobbies)}</span> por esta razón te 
                enviamos este bono, esperamos lo disfrutes.
              </p>
            </div>
          ))}
        </div>
        </>
      ):(
        <p className="font-bold text-2xl text-center">No hay empleados seleccionados</p>
      )

      }
        
    </>
  );
}

export default MensajeEmpleados;