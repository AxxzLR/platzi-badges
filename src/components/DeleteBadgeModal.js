import React from 'react'
import '../styles/Modal.css'
import Modal from './Modal'

const DeleteBadgeModal= (props) => {
    return (
        <Modal {...props}>
            <div className="DeleteBadgeModal">
                <h1>Are You Sure?</h1>
                <p>You are about to delete this badge.</p>

                <div>
                    <button onClick={props.onDeleteBadge} className='btn btn-danger mr-4'>Delete</button>
                    <button onClick={props.onClose} className='btn btn-primary mr-4'>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteBadgeModal