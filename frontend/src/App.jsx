import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Employes from "./components/Employes";
import CreateEmployeeForm from "./components/Empolyee";
import UpdateEmployee from "./components/UpdateEmployee";
import { Landing } from "./components/Landing";
import ProtechedRoute from "./components/ProtechedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtechedRoute>
                <Landing />
              </ProtechedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtechedRoute>
                <Login />
              </ProtechedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtechedRoute>
                <SignUp />
              </ProtechedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtechedRoute>
                <Home />
              </ProtechedRoute>
            }
          />
          <Route
            path="/employes"
            element={
              <ProtechedRoute>
                <Employes />
              </ProtechedRoute>
            }
          />
          <Route
            path="/employeeform"
            element={
              <ProtechedRoute>
                <CreateEmployeeForm />
              </ProtechedRoute>
            }
          />
          <Route
            path="/updateemployee/:id"
            element={
              <ProtechedRoute>
                <UpdateEmployee />
              </ProtechedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
