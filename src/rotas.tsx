import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Galeria from './Views/Galeria/Galeria'
import Imagem from './Views/Galeria/Imagem'

export default function Rotas() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Galeria} />
                <Route path='/imagem/:id' component={Imagem} />
            </Switch>
        </Router>
    )
}