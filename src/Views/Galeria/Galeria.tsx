import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface Props { }

interface State {
    imagens: Array<any>
}

export default class Galeria extends Component<Props, State> {
    state: State = {
        imagens: []
    }

    componentDidMount() {
        axios.get('https://picsum.photos/v2/list?limit=10')
            .then((res) => {
                this.setState({
                    imagens: res.data.map((imagem) => {
                        return (
                            <GridListTile key={imagem.id} cols={1}>
                                <img src={imagem.download_url} alt={imagem.author}></img>
                                <GridListTileBar
                                    subtitle={<span>Por: {imagem.author}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`Detalhes sobre esta imagem`} >
                                            <InfoIcon style={{color: 'white'}} />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
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
                <Grid container>
                    <GridList cellHeight={560} cols={3}>
                        {this.state.imagens}
                    </GridList>
                </Grid>
            </div>
        )
    }
}