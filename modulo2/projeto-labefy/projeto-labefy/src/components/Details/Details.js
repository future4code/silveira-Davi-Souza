import axios from "axios";
import React from "react";
import Video from "../Video/Video.js";
import { Body } from "./styled.js";
import Delete from "../../img/delete.png"

class Details extends React.Component {
    state = {
        playlist: [],
        nameMusic: "",
        nameArtist: "",
        urlTrack: ""
    }

    componentDidUpdate = () => {
        this.getPlaylistTracks();
    }

    componentDidMount = () => {
        this.getPlaylistTracks();
    }

    addTrackToPlaylist = async() => {
        const body = {
            name: this.state.nameMusic,
            artist: this.state.nameArtist,
            url: this.state.url
        }

        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;

        try {
            const res = await axios.post(url, body, headers);

            this.setState({nameMusic: "", nameArtist: "", urlTrack: ""});
        }
        catch(err) {
            console.log(err.response);
        }
    }

    getPlaylistTracks = async() => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        try {
            const res = await axios.get(url, headers);

            this.setState({playlist: res.data.result.tracks});
        }
        catch(err) {
            console.log(err.response);
        }
    }

    removeTrackFromPlaylist = async(id) => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`

        try {
            const res = await axios.delete(url, headers);

            this.getPlaylistTracks();
        }
        catch(err) {
            console.log(err.response);
        }
    }

    onChangeMusic = (e) => this.setState({nameMusic: e.target.value});
    onChangeArtist = (e) => this.setState({nameArtist: e.target.value});
    onChangeUrl = (e) => this.setState({url: e.target.value});



    render () {
        const tracks = this.state.playlist.map(track => {
            return (
                <div className="video-description" key={track.id}>
                    <div>
                        <p>Autor: {track.artist}</p>
                        <p>Nome: {track.name}</p>
                    </div>
                    <hr/>
                    {/* <button onClick={() => this.props.goToVideo(track.url)}>Video</button> */}
                    <Video url={track.url}/>
                    <hr/>
                    <button className="button-delete" onClick={() => this.removeTrackFromPlaylist(track.id)}><img className="img-delete" src={Delete}/></button>
                </div>
            )
        });

        return (
            <Body>
                <div className="div-form">
                    <input className="input" type="text" value={this.state.nameMusic} onChange={this.onChangeMusic} placeholder="Nome da música"/>
                    <input className="input" type="text" value={this.state.nameArtist} onChange={this.onChangeArtist} placeholder="Nome do artista"/>
                    <input className="input" type="text" value={this.url} onChange={this.onChangeUrl} placeholder="Url da música"/>
                    <button onClick={this.addTrackToPlaylist}>Adicionar</button><br/>
                </div>
                <hr/>
                {tracks}
            </Body>
        );
    }  
}

export default Details;