import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import StateContext from "./hooks/stateContext";
import UserForm from "./components/userForm";
import UsersTable from "./components/usersTable";
import NotFound from "./components/not-found";

const App : React.FC = () => {
  return(
   <StateContext>
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/users" element={<UsersTable />} />
      <Route path="/not-found" element={<NotFound/>} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
   </StateContext>
  )
}

export default App;
