import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Badges.css'
import ConfLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'
import api from '../api'

class Badges extends React.Component {
    state = {
        isLoading: true,
        error: null,
        data: undefined,
    }
    //#region Ejemplos de cliclo de vida de un componente
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    //     console.log('1.constructor()')
    // }

    // componentDidMount() {
    //     this.timeoutid = setTimeout(() => {
    //         this.setState({
    //             data: [
    //                 {
    //                     "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //                     "firstName": "Freda",
    //                     "lastName": "Grady",
    //                     "email": "Leann_Berge@gmail.com",
    //                     "jobTitle": "Legacy Brand Director",
    //                     "twitter": "FredaGrady22221-7573",
    //                     "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
    //                 },
    //                 {
    //                     "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //                     "firstName": "Major",
    //                     "lastName": "Rodriguez",
    //                     "email": "Ilene66@hotmail.com",
    //                     "jobTitle": "Human Research Architect",
    //                     "twitter": "MajorRodriguez61545",
    //                     "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
    //                 },
    //                 {
    //                     "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //                     "firstName": "Daphney",
    //                     "lastName": "Torphy",
    //                     "email": "Ron61@hotmail.com",
    //                     "jobTitle": "National Markets Officer",
    //                     "twitter": "DaphneyTorphy96105",
    //                     "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
    //                 },
    //             ]
    //         })
    //     }, 3000)
    //     console.log('3.componentDidMount()')
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('5.componentDidUpdate()')
    //     console.log({ prevProps: prevProps, prevState: prevState })
    //     console.log({ props: this.props, state: this.state })
    // }

    // componentWillUnmount() {
    //     //Peocesos de limpieza de timeout o peticiones (fetch)
    //     clearTimeout(this.timeoutid)
    //     console.log('6.componentWillUnmount')
    // }

    //#endregion

    //si la funcion se declara como metodo pierde su scope cuando la vuelve a llamar
    //Si la funcion se declara como arrow function no pierde su scope
    fetchData = async () => {
        this.setState({ isLoading: true, error: null })
        try {
            const data = await api.badges.list()
            this.setState({ isLoading: false, data: data })
        } catch (error) {
            this.setState({ isLoading: false, error: error })
        }
    }

    componentDidMount() {
        this.fetchData()

        this.intervalID = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount() {
        // console.log(this)
        // console.log('tirando componente')
        clearInterval(this.intervalID)
        // console.lkog('componente tirado')
    }

    render() {
        if (this.state.isLoading && !this.state.data) {
            // return <h3>Loading...</h3>
            return (
                <PageLoading />
            )
        }
        if (this.state.error) {
            // return <h3>{`Error: ${this.state.error.message}`}</h3>
            return (
                <PageError error={this.state.error} />
            )
        }
        return (
            <React.Fragment>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img src={ConfLogo} alt="Logo" className='Badges_conf-logo' />
                        </div>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/new" className='btn btn-primary'>New Badge</Link>
                    </div>
                </div>

                <div className='Badges__list'>
                    <div className='Badges__container'>
                        {/* {
                            this.state.isLoading ? <h3>Loading...</h3> :
                                this.state.error ? <h3>{this.state.error.message}</h3> :
                                    <BadgesList badges={this.state.data} />
                        } */}
                        <BadgesList badges={this.state.data} />
                        {this.state.isLoading && <MiniLoader />}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges