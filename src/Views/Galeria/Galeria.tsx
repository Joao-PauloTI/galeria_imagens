import React, {Component} from 'react'
import axios from 'axios'
import Banner from "./Banner";

interface Props {

}

interface State {
    imagens: Array<any>
    totalImagens: String
    pagina: number
}

export default class Galeria extends Component<Props, State> {
    readonly url_base = 'https://pixabay.com/api/?key=17238907-5977b50b3e961ac65649095d7&safesearch=true'

    state: State = {
        imagens: [],
        totalImagens: '',
        pagina: 1
    }

    mudarPagina = (numero) => {
        if (numero === 'anterior') {
            if (this.state.pagina > 1) {
                this.setState({
                    pagina: this.state.pagina - 1
                })
                this.buscarImagens(this.state.pagina)
            }
        } else if (numero === 'proximo') {
            if (this.state.pagina < 10) {
                this.setState({
                    pagina: this.state.pagina + 1
                })
                this.buscarImagens(this.state.pagina)
            }
        } else {
            this.setState({
                pagina: numero
            })
            this.buscarImagens(this.state.pagina)
        }
    }

    buscarImagens = (pagina) => {
        axios.get(`${this.url_base}&per_page=21&page=${pagina.toString()}`)
            .then((res) => {
                this.setState({
                    totalImagens: res.data.total,
                    imagens: res.data.hits.map((imagem) => {
                        let imagemTag
                        if (imagem.tags.length > 30) {
                            imagemTag = imagem.tags.slice(0, 26).concat('...')
                        } else {
                            imagemTag = imagem.tags
                        }
                        return (
                            <div className={"col-md-4"} key={imagem.id} style={{paddingBottom: "1%", paddingTop: "1%"}}>
                                <div className={"card text-white bg-dark"}>
                                    <img src={imagem.largeImageURL}
                                         className={"card-img-top"}
                                         style={{height: "350px", width: "100%"}}
                                         alt={"Pixabay"}
                                    />
                                    <div className={"card-body"} style={{padding: "2%"}}>
                                        <div className={"row"}>
                                            <div className={"col-md-6"}>
                                                <small>{imagem.views} Visualizações</small>
                                                <a href={"/imagem/"+imagem.id} target={"_blank"} className={"btn btn-outline-light"}>Detalhes</a>
                                                <h6 style={{marginTop: "5%"}}>
                                                    Tags: <br/><span className={"badge badge-info"} style={{fontFamily: "sans-serif"}}>{imagemTag}</span>
                                                </h6>
                                            </div>
                                            <div className={"col-md-6"}>
                                                <img src={imagem.userImageURL}
                                                     className={"mr-3 mt-3 rounded-circle"}
                                                     style={{width: "35%", float: "right"}}
                                                     alt={imagem.user}
                                                     title={imagem.user}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.buscarImagens(this.state.pagina)
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        if (prevState.pagina !== this.state.pagina) {
            this.buscarImagens(this.state.pagina)
        }
    }

    render() {
        return (
            <div>
                <Banner/>
                <div className={"container-fluid"}>
                    <div id={"topoGaleria"} className={"container"} style={{paddingTop: "5%"}}>
                        <h4 style={{color: "white", textAlign: "center"}}>A <a href={"https://pixabay.com/"} target={"_blank"} style={{color: "white"}}><strong>Pixabay</strong></a> dispõe de mais de <strong>1,8 milhões</strong> de imagens fantásticas e vídeos de alta qualidade compartilhados por usuários do mundo inteiro!</h4>
                    </div>
                    <div className={"row"}>
                        {this.state.imagens}
                    </div>
                    <div className={"container"}>
                        <nav aria-label="Page navigation example">
                            <ul className={"pagination pagination-lg justify-content-center"}>
                                <li className={"page-item"}>
                                    <a className={"page-link"}
                                       onClick={() => this.mudarPagina('anterior')}
                                       style={{color: "white", backgroundColor: "#343a40"}}
                                       aria-label={"Anterior"}
                                       href={"#topoGaleria"}>
                                        <span aria-hidden={"true"}>&laquo;</span>
                                        <span className={"sr-only"}>Anterior</span>
                                    </a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(1)}
                                       href={"#topoGaleria"}>1</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(2)}
                                       href={"#topoGaleria"}>2</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(3)}
                                       href={"#topoGaleria"}>3</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(4)}
                                       href={"#topoGaleria"}>4</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(5)}
                                       href={"#topoGaleria"}>5</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(6)}
                                       href={"#topoGaleria"}>6</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(7)}
                                       href={"#topoGaleria"}>7</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(8)}
                                       href={"#topoGaleria"}>8</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(9)}
                                       href={"#topoGaleria"}>9</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"} style={{color: "white", backgroundColor: "#343a40"}} onClick={() => this.mudarPagina(10)}
                                       href={"#topoGaleria"}>10</a>
                                </li>
                                <li className={"page-item"}>
                                    <a className={"page-link"}
                                       style={{color: "white", backgroundColor: "#343a40"}}
                                       onClick={() => this.mudarPagina('proximo')}
                                       aria-label={"Próximo"}
                                       href={"#topoGaleria"}>
                                        <span aria-hidden={"true"}>&raquo;</span>
                                        <span className={"sr-only"}>Próximo</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}