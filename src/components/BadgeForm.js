import React from 'react'

class BadgeForm extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: 'Designer',
    //     twitter: ''
    // } //inicializar el estado
    //#region Metodos
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('From was summited')
    //     console.log(this.props.formValues)
    // }

    handleClick = (e) => {
        console.log('button was clicked')
    }
    //#endregion

    //#region Metodos Ejemplo
    // handleChange = (e) => {
    //     console.log({
    //         value: e.target.value,
    //         name: e.target.name
    //     })
    // }

    // handleClick = (e) => {
    //     console.log('button was clicked')
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('From was summited')
    // }
    //#endregion

    render() {
        return (
            <div>
                <h1>{this.props.typeForm} Attendant</h1>
                <form onSubmit={this.props.onSubmit} >
                    <div className='form-group'>
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='firstName'
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='lastName'
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type='email'
                            name='email'
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='jobTitle'
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type='text'
                            name='twitter'
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className='btn btn-primary'>Save</button>
                    {this.props.error && <p className='text-danger'>{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm

