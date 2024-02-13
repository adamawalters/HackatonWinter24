import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Employee from "./Employee"
import Employees from "./Employees"
import Admin from "./Admin"

function Main() {



  return (
    <main>
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/admin" element={<Admin />} />
            <Route  path="/employees" element={<Employees />} />
            <Route  path="/employees/:employeeId" element={<Employee />} />
        </Routes>
    </main>
  )
}

export default Main