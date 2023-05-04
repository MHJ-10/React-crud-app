import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import StateContext from "./hooks/stateContext";
import UserForm from "./pages/userForm";
import UsersTable from "./pages/usersTable";
import NotFound from "./pages/notFound";

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
