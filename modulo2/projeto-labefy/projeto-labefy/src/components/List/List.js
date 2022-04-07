import axios from "axios";
import React from "react";

class List extends React.Component {
    state = {
        playlist: []
    }

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    deletePlaylist = async(id) => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        try {
            const res = await axios.delete(url,headers);

            this.getAllPlaylists();
        }
        catch (err) {
            console.log(err.response)
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
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </div>
            )
        });

        return (
            <div>
                {/* <button onClick={this.getAllPlaylists}>Chamar playlist</button> */}
                {list}
                
            </div>
        )
    }
}

export default List;