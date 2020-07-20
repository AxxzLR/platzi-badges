import React from 'react'
import ConfLogo from '../images/badge-header.svg'
import '../styles/Badge.css'
import Gravatar from './Gravatar'


class Badge extends React.Component {

    // constructor(props) {
    //     super(props)
    // }
    //Se puede realizar de la forma anterior
    render() {
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={ConfLogo} alt='Logo conferencia' />
                </div>
                <div className='Badge__section-name'>
                    {/* <img className='Badge__avatar' src={avatarDefault} alt='Avatar' /> */}
                    <Gravatar className='Badge__avatar' email={this.props.email} />
                    <h1>{this.props.firstName || 'First name'}<br />{this.props.lastName || 'Last name'}</h1>
                </div>
                <div className='Badge__section-info'>
                    <h3>{this.props.jobTitle || 'Job title'}</h3>
                    <div>@{this.props.twitter || 'Twitter'}</div>
                </div>
                <div className='Badge__footer'>#PlatziConf</div>
            </div>
        )
    }
}

export default Badge