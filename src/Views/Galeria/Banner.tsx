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

    componentDidMount() {
        axios.get(`${this.url_base}&editor_choice=true`)
            .then((res) => {
                let _idAleatorio = (Math.floor(Math.random() * 20)).toString()
                if (_idAleatorio in res.data.hits){
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
                                        <img src={imagem.largeImageURL} style={{width: "100%", height: "700px"}} alt={"Pixabay"}/>
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
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        {this.state.banner}
                    </div>
                </div>
            </div>
        );
    }
}