import RenderResult from "next/dist/server/render-result"

export async function getEmpleados(){
  return fetch('http://localhost:3000/api/empleados')
  .then(response => response.json())
}
