import React from 'react'
import BadgesListItem from './BadgesListItem'
import { Link } from 'react-router-dom'

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('')
    const [filtredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(()=>{
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase())
        })
        setFilteredBadges(result)
    },[badges,query])
    return {query, setQuery, filtredBadges}
}

function BadgesList(props) {
    const badges = props.badges
    const {query, setQuery, filtredBadges} = useSearchBadges(badges)
    return (
        <React.Fragment>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type='text' className='form-control'
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            {(filtredBadges.length === 0) ?
                <div>
                    <h3>No badges were found</h3>
                    <Link className='btn btn-primary' to='badges/new'>Create a new badge</Link>
                </div> :
                <ul className="list-unstyled">
                    {filtredBadges.map(
                        badge => {
                            return (
                                <li className='Badge-list' key={badge.id} >
                                    <BadgesListItem badge={badge} />
                                </li>
                            )
                        })
                    }
                </ul >
            }
        </React.Fragment>
    )
}

export default BadgesList