import React, {Component} from 'react'
import Banner from "./Banner";
import axios from 'axios'

interface Props {

}

interface State {
    imagens: Array<any>
    totalImagens: String
}

export default class Galeria extends Component<Props, State> {
    readonly url_base = 'https://pixabay.com/api/?key=17238907-5977b50b3e961ac65649095d7&safesearch=true'

    state: State = {
        imagens: [],
        totalImagens: ''
    }

    componentDidMount() {
        axios.get(`${this.url_base}&per_page=15`)
            .then((res) => {
                this.setState({
                    totalImagens: res.data.total,
                    imagens: res.data.hits.map((imagem) => {
                        return (
                            <div className={"col-md-4"} key={imagem.id} style={{paddingBottom: "5px", paddingTop: "5px"}}>
                                <img src={imagem.webformatURL} className={"img-thumbnail"} style={{width: "100%", height: "300px"}} alt={"Pixabay"}/>
                            </div>
                        )
                    })
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Banner/>
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.imagens}
                    </div>
                </div>
            </div>
        )
    }
}