import React from 'react'
import '../styles/NotFound.css'
import Rocket from '../images/rocket.svg'

function NotFound() {
    return (
        <div className="notFound__hero">
            <div className='notFount__container'>
                <img src={Rocket} alt="rocket" />
                <div className='notFount__container--text'><span>404</span><br />No encontramos su destino.</div>
            </div>
        </div>
    )
}

export default NotFound