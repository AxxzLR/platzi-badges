import React from 'react'
import '../styles/NotFound.css'
import Crash from '../images/crash.svg'

function PageError(props){
    console.log(props.error)
    const _error = props.error.message.split(':');
    return (
        <div className="notFound__hero">
            <div className='notFount__container'>
                <img src={Crash} alt="rocket" />
                <div className='notFount__container--text'><span>{_error[0]}</span><br />{_error[1]}</div>
            </div>
        </div>
    )
}

export default PageError