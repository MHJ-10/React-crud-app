import { Modal, Button } from 'react-bootstrap';


interface IDeleteModal{
    show: boolean
    handleClose: () => void
    handleDelete: () => void
}
const DeleteModal = ({show, handleClose, handleDelete}: IDeleteModal) => {
    return(
        <div className="modal show">
            <Modal show={show}>
                
                <Modal.Body>
                 <h5>آیا از حدف این کاربر مطمئنید؟</h5>
                </Modal.Body>
                <Modal.Footer>
                   <Button variant='danger' onClick={handleClose}>
                     خیر
                   </Button>
                   <Button variant='success'  onClick={handleDelete}>
                     بله
                   </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteModal;