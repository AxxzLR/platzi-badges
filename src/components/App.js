import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BadgesNew from '../pages/BadgeNew'
import BadgesEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Badges from '../pages/Badges'
import Layout from './Layout'
import NotFound from './NotFound'

import TestHooks from './TestHooks'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges' component={Badges} />
                    <Route exact path='/badges/new' component={BadgesNew} />
                    <Route exact path='/badges/:badgeID' component={BadgeDetails} />
                    <Route exact path='/badges/:badgeID/edit' component={BadgesEdit} />
                    <Route exact path='/test/hooks' component={TestHooks} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App