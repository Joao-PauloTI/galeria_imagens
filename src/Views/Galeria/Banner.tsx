import React, {Component} from "react";
import axios from "axios"

interface Props {

}

interface State {
    banner: String
    idAleatorio: String
}

export default class Banner extends Component<Props, State> {
    readonly url_base = 'https://pixabay.com/api/?key=17238907-5977b50b3e961ac65649095d7&safesearch=true'

    state: State = {
        banner: '',
        idAleatorio: ''
    }

    componentWillMount() {
        axios.get(`${this.url_base}&per_page=50&editor_choice=true`)
            .then((res) => {
                let _idAleatorio = (Math.floor(Math.random() * 50)).toString()
                if (_idAleatorio in res.data.hits) {
                    this.setState({
                        idAleatorio: res.data.hits[_idAleatorio].id
                    })
                }
            })
            .then(() => {
                axios.get(`${this.url_base}&id=${this.state.idAleatorio}`)
                    .then((res) => {
                        this.setState({
                            banner: res.data.hits.map((imagem) => {
                                return (
                                    <div key={imagem.id}>
                                        <div className="card bg-dark text-white">
                                            <img className="card-img" src={imagem.largeImageURL} style={{opacity: "0.5"}}/>
                                            <div className="card-img-overlay">
                                                <h5 className="card-title"><strong>Galeria de Imagens</strong></h5>
                                                <p className="card-text">
                                                    Uma simples aplicação feita em <strong>React Typescript</strong><br/>
                                                    que utiliza a API de imagens da <a href={"https://pixabay.com/"} style={{color: "white"}} target={"_blank"}><strong>Pixabay</strong></a>.
                                                    <br/><br/>
                                                    Criado por <strong>João Paulo</strong> e <strong>Higor Augusto</strong><br/>
                                                    do 4º ano de Sistemas de Informação da UniFOA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        })
                    })
            })
    }

    render() {
        return (
            <div className={"container-fluid"}>
                {this.state.banner}
            </div>
        );
    }
}