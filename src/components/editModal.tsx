import { Button, Modal } from "react-bootstrap";
import Input from "./input";
import React, { useContext, useState, useEffect } from "react";
import { AppContext, IUser } from "../hooks/stateContext";
import MultiSelect from "./multiSelect";

interface IEdit {
    userP: IUser
    users: IUser[]
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}

const EditModal = ({userP, users, setUsers}: IEdit) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const{selectedOptions, setSelectedOptions} = useContext(AppContext)
  const [user, setUser] = useState<IUser>({
     id: userP.id, 
     fullName: userP.fullName, 
     age: userP.age, 
     skills: userP.skills
    })

  useEffect(() => {
   const skills = selectedOptions.map((option) => option)
   setUser({...user, skills})
  }, [selectedOptions])
       
  const handleEdit = () => {   
    const editedUser=[...users]
    const index = users.findIndex((u) => u.id === user.id)
    editedUser[index] = {
     id: user.id,
     fullName: user.fullName,
     age: user.age,
     skills: user.skills
    }
    localStorage.setItem("users", JSON.stringify(editedUser))
    setUsers(editedUser)
    setShowEditModal(false)
  }
     
    return(
        <div>
            <Button variant="warning" onClick={() => setShowEditModal(true)}>
                ویرایش 
            </Button>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header>
                <Modal.Title>ویرایش کاربر</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Input
                 label="نام و نام خانوادگی" 
                 id="fullName"
                 type="text"
                 defaultValue={userP.fullName}
                 width={50}
                 onChange={(e) => setUser({...user, fullName: e.currentTarget.value})}
                />
                <Input
                 label="سن" 
                 id="age"
                 type="number"
                 defaultValue={userP.age}
                 width={25}
                 onChange={(e) => setUser({...user, age: parseInt(e.currentTarget.value)})}
                />
                <MultiSelect 
                 selectedOptions={userP.skills}
                 setSelectedOptions={setSelectedOptions}
                />      
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={() => setShowEditModal(false)}>
                    بازگشت
                </Button>
                <Button variant="success" onClick={handleEdit}>
                    ثبت ویرایش
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )

}

export default EditModal;