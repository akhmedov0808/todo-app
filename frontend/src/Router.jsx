import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'
import Home from './pages/HomePage'
import './index.css'

export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
