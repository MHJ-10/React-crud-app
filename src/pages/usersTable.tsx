import {useContext, useEffect} from "react";
import { AppContext } from "../hooks/stateContext";
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import DeleteModal from "../components/deleteModal"
import EditModal from "../components/editModal";



const UsersTable = () => {
 const {users, setUsers} = useContext(AppContext)

 useEffect (() => {
    const getUsers = localStorage.getItem("users")
    if(getUsers){
        const parsedUsers = JSON.parse(getUsers)
        setUsers(parsedUsers)
    }
  },[]) 

  return(
        
     <div className="mx-auto text-center">
               
       <Table
        className="w-75 mx-auto my-4 border border-secondary "
        striped bordered hover responsive
        variant="light">
          <thead>
            <tr>
             <th>نام و نام خانوادگی</th>
             <th>سن</th>
             <th>مهارت ها</th>
             <th></th>    
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (  
            <tr key={user.id}>
               <td>{user.fullName}</td>
               <td>{user.age}</td>
               <td>{user.skills?.join(" ، ")}</td>
               <td>
                <div className="d-flex justify-content-around">
                  <EditModal 
                   userP={user}
                   users={users}
                   setUsers={setUsers}
                   />
                   <DeleteModal 
                   userP={user}
                   users={users}
                   setUsers={setUsers}
                   /> 
              </div>
                </td>
              </tr>  
           ))}
            </tbody>
        
          </Table>
               <Link to={"/"} className="btn btn-success">
                افزودن کاربر
               </Link>
        </div> 
           
    )
}

export default UsersTable;