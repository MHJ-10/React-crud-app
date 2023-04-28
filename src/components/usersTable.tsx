import {useState, useContext, useEffect} from "react";
import { AppContext, IUser } from "../hooks/stateContext";
import {Table, Button, Modal} from "react-bootstrap"
import { Link } from "react-router-dom";
import Input from "./input";
import MultiSelect from "./multiSelect";
import DeleteModal from "./deleteModal"
import { handleGetName } from "./multiSelect";



const UsersTable = () => {
 const[showEditModal,setShowEditModal] = useState<{show: boolean, id: number | null}>({show: false, id:null})
 const[showDeleteModal,setShowDeleteModal] = useState<{show: boolean, id: number | null}>({show: false, id: null})
 const {user, setUser, fullName , setFullName, age, setAge , skills, setSkills, selectedOptions} = useContext(AppContext)
  
   
  

  useEffect (() => {
    const users = localStorage.getItem("users")
    if(users){
        const parsedUsers = JSON.parse(users)
        setUser(parsedUsers)
    }
  },[]) 


  const handleDelete = () => {
    if(showDeleteModal.id !== null){
       const filteredUsers = user.filter((u: IUser) => u.id !== showDeleteModal.id)
        setUser(filteredUsers)
        localStorage.setItem("users",JSON.stringify(filteredUsers)) 
        setShowDeleteModal({show: false, id: null})
       }
     }

     const handleEdit = () => {
        if(showEditModal.id !== null){
            const getSkills = handleGetName(selectedOptions)
             const skill = getSkills.toString()
            setSkills([...skills, skill])
            const users=[...user]
            const index = users.findIndex((u: IUser) => u.id === showEditModal.id)
            console.log(index);
           users[index]= {
            id: showEditModal.id,
            fullName,
            age,
            skills:[skill]
           }
           setUser(users)
           localStorage.setItem("users",JSON.stringify(users)) 
           setShowEditModal({show: false, id: null})
           setFullName("")
           setAge(0)
           setSkills([])
        }
     }



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
            { 
              user.map((u) => (  
            <tr key={u.id}>
               <td>{u.fullName}</td>
               <td>{u.age}</td>
               <td>{u.skills}</td>
               <td>
                <div className="d-flex justify-content-around">
                  <Button 
                   onClick={() => setShowEditModal({show: true, id: u.id})}
                   variant="primary"
                   >
                     ویرایش
                  </Button>
                  <Button
                   className="px-3 "
                   onClick={() => setShowDeleteModal({show: true, id: u.id})}
                   variant="danger"
                  >
                    حذف
                  </Button> 
              </div>
                </td>
              </tr>  
           ))}
            </tbody>
        
          </Table>

          <DeleteModal 
            show={showDeleteModal.show} 
            handleClose={() => setShowDeleteModal({show: false, id: null})}
            handleDelete={() => handleDelete()}  
           />
               <Link 
               to={"/"}
               className="btn btn-success"
               >
                افزودن کاربر
               </Link>
               <div className="modal show">
                <Modal show={showEditModal.show}>
            <Modal.Header >
                <Modal.Title  >
                   ویرایش کاربر
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <Input
                label='نام و نام خانوادگی'
                type='text'
                id='fullName'
                onChange={(e) => setFullName(e.currentTarget.value)}
                />
                <Input
                label= 'سن'
                type="number"
                id='age'
                onChange={(e) => setAge(parseInt(e.currentTarget.value))}
                />
                <MultiSelect />
            </Modal.Body>

            <Modal.Footer>
                <Button
                  onClick={() => setShowEditModal({show: false, id: null})}
                  variant="danger">
                    بستن
                </Button>
                <Button 
                  onClick={() => handleEdit()}
                  variant="primary">
                   ثبت ویرایش
                </Button>
            </Modal.Footer>
        </Modal>
         </div>
        </div> 
           
    )
}

export default UsersTable;