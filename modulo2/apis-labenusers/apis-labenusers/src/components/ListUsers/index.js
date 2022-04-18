import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
    state = {
        usuarios: [],
        name: ""
    }

    componentDidMount = () => {
        this.getAllUsers();
    }
    
    getAllUsers = () => {
        const headers = this.props.headers;

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
        axios.get(url, headers)
        .then(res => {
          this.setState({usuarios: res.data});
        })
        .catch(error => {
          alert(error.res.data);
        })
    }

    deleteUser = (id) => {
        if(window.confirm("Tem certeza que deseja apagar o usuário?")){
            const headers = this.props.headers;

            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

            axios.delete(url, headers)
            .then(res => {
                alert("Usuário deletado com sucesso!");
                this.getAllUsers();
            })
            .catch(err => {
                alert("Ocorreu um erro, tente novamente.")
            })
        }
        return;
    }

    searchUser = async() => {
        const headers = this.props.headers;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}`;
        
        try{
            const res = await axios.get(url,headers)

            this.setState({usuarios: res.data});

            this.setState({name: ""});
        }
        catch(err) {
            alert(err.response.data.message)
        }

        if(this.state.usuarios.length === 0){
            this.getAllUsers();
        }
    }

    onChangeName = (event) => this.setState({name: event.target.value});

    render() {
        const list = this.state.usuarios.map(users => {
            return (
                <li key={users.id}>
                    <p>{users.name}</p>
                    <button onClick={() => this.deleteUser(users.id)}>X</button>
                </li>
            )
        });

        return(
            <div>
                <button onClick={this.props.goToPostUsers}>Trocar Tela</button> <br/>
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