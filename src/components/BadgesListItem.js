import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

const BadgesListItem = (props) => {
    const badge = props.badge
    return (

        <Link className='text-reset text-decoration-none'
            to={`badges/${badge.id}`}>
            {/* <img className='Badge-list__avatar' src={badge.avatarUrl} alt="avatar" /> */}
            <Gravatar className='Badge-list__avatar' email={badge.email} />
            <div className='Badge-list__info'>
                <p className='Badge-list__info--name'>{badge.firstName} {badge.lastName}</p>
                {/* <a className='Badge-list__info--twitter' href={`https://twitter.com/${badge.twitter}`} target='_blank' rel="noopener noreferrer"> */}
                <p className='Badge-list__info--twitter'>
                    <img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" alt="twitter" />
                        @{badge.twitter}
                </p>
                <p className='Badge-list__info--job'>{badge.jobTitle}</p>
            </div>
        </Link>
    )
}

export default BadgesListItem