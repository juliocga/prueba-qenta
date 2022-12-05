import { useEffect } from "react";
import { getEmpleados } from "../../utils/getEmpleados";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectEmpleadosState, 
  setEmpleadosState,
  setEmpleadosSelectedState,
  selectEmpleadosSelectedState,
} from "../../features/users/empleadosSlice";
import Link from "next/link";
import { getAge } from "../../utils/utils";

function EmpleadosList () {

  const empleadosState = useSelector(selectEmpleadosState);
  const empleadosSelectedState = useSelector(selectEmpleadosSelectedState);
  const dispatch = useDispatch();

  useEffect(()=>{
    getEmpleados().then(result => dispatch(setEmpleadosState(result)));
    dispatch(setEmpleadosSelectedState([]));
  },[dispatch]);

  const columns = [
    { field: 'index', headerName: 'ID', width: 50 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
    {
      field: 'birthday',
      headerName: 'Birthday',
      description: 'This column has a value getter and is not sortable.',
      width: 150,
      sortable: false,
      valueGetter: (params) =>{
        const date = new Date(params.row.birthday.slice(0, 19));
        return date.toDateString()
      }
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 80,
      valueGetter: (params) =>{
        return getAge(params.row.birthday);
      },
    },
    {
      field: 'hobbies',
      headerName: 'Hobbies',
      width: 'auto',
    },
  ];
  
  return (
    <>
      <p className="font-bold text-2xl">Empleados de la empresa</p>
      <p>Selecciona los empleados para crear un mensaje de feliz cumpleaños.</p>
      {empleadosSelectedState.length > 0 && (
        <div className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-40 justify-center">
          <Link href="/mensajes">
            {empleadosSelectedState.length > 1 ? (
              "Crear mensajes"
            ):(
              "Crear mensaje"
            )}
          </Link>
        </div>
      )}
      <Box sx={{ height: 640, width: '90%' }}>
        <DataGrid
          rows={empleadosState}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            dispatch(setEmpleadosSelectedState(newSelectionModel));
          }}
          getRowId={(row) => row._id}
        />
      </Box>
    </>
  )
}

export default EmpleadosList;