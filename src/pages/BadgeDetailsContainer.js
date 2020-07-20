import React from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from '../components/BadgeDetails'


class BadgeDetailsContainer extends React.Component {
    state = {
        isLoading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ isLoading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeID)
            this.setState({ isLoading: false, data: data })
        } catch (error) {
            this.setState({ isLoading: false, error: error })
        }
    }

    handleOpenModal = () => {
        this.setState({ modalIsOpen: true })
    }

    handleCloseModal = () => {
        this.setState({ modalIsOpen: false })
    }

    handleDeleteBadge = async () => {
        this.setState({ isLoading: true, error: null })
        try {
            await api.badges.remove(this.props.match.params.badgeID)
            this.props.history.push('/badges')
            this.setState({ isLoading: false })
        } catch (error) {
            this.setState({ isLoading: false, error: error })
        }
    }

    render() {
        if (this.state.isLoading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <BadgeDetails
                data={this.state.data}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge} />
        )
    }
}

export default BadgeDetailsContainer