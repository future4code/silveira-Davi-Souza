import React from "react";
import axios from 'axios';
import ListUsers from "./components/ListUsers";
import PostUsers from "./components/PostUsers";

const headers = {
  headers: {
    Authorization: "Davi-Souza-Silveira"
  }
};

class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
    tela: 2
  };

  renderizaTela = () => {
    switch (this.state.tela) {
    case 1:
      return (
        <div>
          <PostUsers 
            inputName={this.state.inputName}
            inputEmail={this.state.inputEmail}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            createUser={this.createUser}
          />
        </div>
      )

    case 2:
      return (
        <div>
          <ListUsers 
            users={this.state.usuarios}
          />
        </div>
      )

    default:
      break;
    }
  }
  

  componentDidMount = () => {
    this.getAllUsers();
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    
    axios.post(url, body, headers)
    .then(res => {
      alert("Usuário criado com sucesso!")
      this.getAllUsers();
      this.setState({inputName: ""});
      this.setState({inputEmail: ""});
    })
    .catch(error => {
      alert(error.response.data.message);
    });
  }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url, headers)
    .then(res => {
      console.log(res.data)
      this.setState({usuarios: res.data});
    })
    .catch(error => {
      alert(error.res.data);
    })
  }

  onChangeName = (event) => this.setState({inputName: event.target.value});
  onChangeEmail = (event) => this.setState({inputEmail: event.target.value});

  trocaTela = () => {
    this.state.tela === 1 ? this.setState({tela: 2}) : this.setState({tela: 1});
  }

  render () {
    return (
      <div>

        <button onClick={this.trocaTela}>Trocar Tela</button> <br/>

        {this.renderizaTela()}

      </div>
    );
  }
}

export default App;