import React from 'react'
import Badge from '../components/badge'
import BadgeForm from '../components/BadgeForm.js'
import header from '../images/platziconf-logo.svg'
import '../styles/BadgeNew.css'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

// const props = {
//     firstName: 'Axel Alexis',
//     lastName: 'López',
//     jobTitle: 'Fronend & Backend Developer',
//     twitter: 'AxxzLR',
//     avatar: 'https://www.gravatar.com/avatar?d=identicon',
// }

class BadgeNew extends React.Component {
    state = {
        isLoading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    } //inicializar el estado

    onChange = e => {
        /*
        Cuando se ejecuta el evento onChange el setState se reinicializa el
        Valor de form por lo cual se requiere alguna tecnica para mantener los estados.
        */
        //#region Forma1
        // const nextForm = this.state.form
        // nextForm[e.target.name] =e.target.value
        // this.setState({
        //     form: nextForm
        // })
        //#endregion

        //#region Forma2
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        //#endregion
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ isLoading: true, error: null })
        try {
            await api.badges.create(this.state.form)
            this.setState({ isLoading: false })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ isLoading: false, error: error })
        }
    }

    render() {
        if (this.state.isLoading) {
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className='BadgeNew__hero'>
                    <img className='img-fluid BadgeNew__hero-image' src={header} alt='Logo' />
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge  {...this.state.form} />
                        </div>
                        <div className='col-6'>
                            <BadgeForm
                                typeForm='New'
                                onSubmit={this.handleSubmit}
                                onChange={this.onChange}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew