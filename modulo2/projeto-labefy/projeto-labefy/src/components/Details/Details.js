import axios from "axios";
import React from "react";
import Video from "../Video/Video.js";

class Details extends React.Component {
    state = {
        playlist: [],
        nameMusic: "",
        nameArtist: "",
        urlTrack: ""
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
                <div key={track.id}>
                    <p>{track.artist}</p>
                    <p>{track.name}</p>
                    <button onClick={() => this.removeTrackFromPlaylist(track.id)}>Delete Track</button>
                    <button onClick={() => this.props.goToVideo(track.url)}>Video</button>
                    <Video url={track.url}/>
                </div>
            )
        });

        return (
            <div>
                <input type="text" value={this.state.nameMusic} onChange={this.onChangeMusic} placeholder="Nome da música"/>
                <input type="text" value={this.state.nameArtist} onChange={this.onChangeArtist} placeholder="Nome do artista"/>
                <input type="text" value={this.url} onChange={this.onChangeUrl} placeholder="Url da música"/>
                <button onClick={this.addTrackToPlaylist}>Add Track</button><br/>
                <button onClick={this.getPlaylistTracks}>Show All</button>
                {tracks}
            </div>
        );
    }  
}

export default Details;