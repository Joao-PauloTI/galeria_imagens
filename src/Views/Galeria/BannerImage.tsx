import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

interface Props {

}


interface State {
    banner: String
    idAleatorio: String
    idFixo: String
}

export default class Banner extends Component<Props, State> {
    readonly url_base = 'https://pixabay.com/api/?key=17238907-5977b50b3e961ac65649095d7&safesearch=true';

    state: State = {
        banner: '',
        idAleatorio: '',
        idFixo: ''
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
                axios.get(`${this.url_base}&id=${this.props.children}`)
                    .then((res) => {
                        this.setState({
                            banner: res.data.hits.map((imagem) => {
                                return (
                                    <div key={imagem.id} className="row">
                                        <div className={"bg-transparent text-white col-md-7"}>
                                            <img className={"card-img"} src={imagem.largeImageURL} style={{opacity: "1"}}/>
                                        </div>
                                        <div className={"card bg-dark text-white col-md-5"}>
                                            <div className={"card-body"} >
                                                <div className={"row"}>
                                                    <div className={"col-md-6"}>
                                                        <div className={"col-md-12"}>
                                                            <h3>
                                                                <b>Detalhes</b>
                                                            </h3>
                                                        </div>
                                                        <div style={{marginTop:"30px"}}>
                                                            <p>Tags: {imagem.tags}</p>
                                                            <p>Curtidas: {imagem.likes}</p>
                                                            <p>Favoritos: {imagem.favorites}</p>
                                                            <p>Visualizações: {imagem.views}</p>
                                                            <p>Comentarios: {imagem.comments}</p>
                                                            <p>Downloads: {imagem.downloads}</p>
                                                            <p>Tipo: {imagem.type}</p>
                                                            <p>
                                                                <a className={"btn btn-info"} href={imagem.pageURL}>Mais Detalhes</a>
                                                            </p>
                                                        </div>
                                                    
                                                    </div>
                                                    <div className={"col-md-6 row"} style={{width:"100%"}}>
                                                        <div className={"col"}></div>
                                                        <img src={imagem.userImageURL}
                                                            style={{width: "100%",height:'auto',borderRadius:'50px',border:'2px solid white',margin:"auto"}}
                                                            alt={imagem.user}
                                                            title={imagem.user}
                                                        />
                                                        <div className={"col"}></div>
                                                        <div style={{textAlign: "center"}} className={"col-md-12"}>
                                                            <p>Usuario: {imagem.user}</p>
                                                        </div>
                                                    </div>
                                                </div>
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