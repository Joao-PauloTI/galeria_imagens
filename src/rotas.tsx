import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Galeria from './Views/Galeria/Galeria'
import Imagem from './Views/Imagem/Imagem'

export default function Rotas() {
    return (
        <Switch>
            <Route path='/' exact component={Galeria} />
            <Route path='/imagem' component={Imagem} />
        </Switch>
    )
}