import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import { IUser } from '../hooks/stateContext';

interface IDelete {
    userP: IUser
    users: IUser[]
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}

const DeleteModal = ({userP, users, setUsers}: IDelete) => {
 const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

 const handleDelete = () => {
   const filteredUsers = users.filter(u => u.id !== userP.id)
   setUsers(filteredUsers)
   localStorage.setItem("users", JSON.stringify(filteredUsers))
   setShowDeleteModal(false)
 }


  return (
        <div>
            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
                حذف
            </Button>
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
             <Modal.Body>
                 <h5>آیا از حذف {userP.fullName} مطمئنید؟</h5>
             </Modal.Body>
             <Modal.Footer>
              <Button variant='danger' onClick={() => setShowDeleteModal(false)}> خیر </Button>
              <Button variant='success' onClick={() => handleDelete()}> بله </Button>
             </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteModal;