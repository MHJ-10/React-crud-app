import React from "react";
import { Navigate, useRoutes} from "react-router-dom";
import StateContext from "./hooks/stateContext";
import UserForm from "./components/userForm";
import UsersTable from "./components/usersTable";
import NotFound from "./components/not-found";

const App : React.FC = () => {
  const router = useRoutes([
    {
     path: "/" , element: <UserForm />,
    },
    {
      path: "/users", element: <UsersTable />,
    },
    {
      path: "/not-found", element: <NotFound />,
    },
    {
      path: "*", element: <Navigate to={"/not-found"} replace />,
    }
  ])


  return(
   <StateContext>
    {router}
   </StateContext>
  )
}

export default App;
