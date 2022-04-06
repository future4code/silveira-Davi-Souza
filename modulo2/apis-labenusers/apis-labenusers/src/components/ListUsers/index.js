import React from "react";
import axios from "axios";



class ListUsers extends React.Component {
    state = {
        users: this.props.users,
        name: ""
    }

    deleteUser = (id) => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

        axios.delete(url, headers)
        .then(res => {
            alert("Usuário deletado com sucesso!");
            this.props.getAllUsers();
        })
        .catch(err => {
            alert("Ocorreu um erro, tente novamente.")
        })
    }

    searchUser = async() => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}`;

        try{
            const res = await axios.get(url,headers)
            
            this.setState({users: res.data});
                    
            this.props.getAllUsers();

            this.setState({name: ""});
        }
        catch(err) {
            alert(err.response.data.message)
        }
    }

    onChangeName = (event) => this.setState({name: event.target.value});

    render() {
        const list = this.state.users.map(users => {
            return (
                <li key={users.id}>
                    {users.name}
                    <button onClick={() => this.deleteUser(users.id)}>X</button>
                </li>
            )
        });

        return(
            <div>
                <ul>
                    {list}
                </ul>
                <hr/>
                <h3>Procurar usuário</h3>
                <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Nome exato para busca"/>
                <button onClick={this.searchUser}>Salvar Edição</button>
            </div>
        )
    }
}

export default ListUsers;