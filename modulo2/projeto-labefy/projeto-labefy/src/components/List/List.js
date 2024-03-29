import axios from "axios";
import React from "react";
import { Body } from "./Styled.js"
import Delete from "../../img/delete.png"
import ImgPlaylist from "../../img/playlist.jpg"

class List extends React.Component {
    state = {
        playlist: []
    }

    componentDidUpdate = () => {
        this.getAllPlaylists();
    }

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    deletePlaylist = async(id) => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        if(window.confirm("Deseja realmente apagar?")){
            try {
                const res = await axios.delete(url,headers);
    
                this.getAllPlaylists();
            }
            catch (err) {
                console.log(err.response)
            }
        }
    }

    getAllPlaylists = async() => {
        const headers = this.props.headers;
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;

        try {
            const res = await axios.get(url, headers);

            this.setState({playlist: res.data.result.list});
        }
        catch (err) {
            console.log(err.response);
        }
    }

    render() {
        const list = this.state.playlist.map(playlist => {
            return(
                <div className="div-card" key={playlist.id}>
                    <button onClick={() => this.props.goToDetails(playlist.id)}><img src={ImgPlaylist}/></button>
                    <div>
                        <button onClick={() => this.props.goToDetails(playlist.id)}>{playlist.name}</button>
                        <button onClick={() => this.deletePlaylist(playlist.id)}><img className="img-delete" src={Delete}/></button>
                    </div>
                </div>
            )
        });

        return (
            <Body>
                {list}
            </Body>
        )
    }
}

export default List;