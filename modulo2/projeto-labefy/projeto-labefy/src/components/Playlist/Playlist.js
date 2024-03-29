import axios from "axios";
import React from "react";
import { Body } from "./Styled.js"

class Playlist extends React.Component {

    state = {
        nameInput: ""
    }

    createPlaylist = async() => {
        const body = {
            name: this.state.nameInput
        }

        const headers = this.props.headers

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;

        try{
            const res = await axios.post(url, body, headers);
            this.setState({nameInput: ""});
        }
        catch (error) {
            console.log(error.response.data.message);
        }
    }

    onChangeName = (e) => this.setState({nameInput: e.target.value});

    render () {
        return (
            <Body>
                <div>
                    <input className="input" type="text" value={this.state.nameInput} onChange={this.onChangeName} placeholder="Nome da playlist"/>
                    <button onClick={this.createPlaylist}>Adicionar</button>
                </div>
            </Body>
        )
    }
}

export default Playlist;