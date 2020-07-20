import React from 'react'
import Badge from '../components/badge'
import '../styles/BadgeDetails.css'
import ConfLogo from '../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from './DeleteBadgeModal'

const BadgeDetails = (props) => {
    const data = props.data
    return (
        <div>
            <div className='BadgeDetails__hero'>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <img src={ConfLogo} alt="Logo conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {data.firstName} {data.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <Badge {...data} />
                    </div>
                    <div className="col-6">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className='btn btn-primary' to={`/badges/${data.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className='btn btn-danger'>Delete</button>
                                <DeleteBadgeModal
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}>
                                    Lorem ipsum
                                </DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails