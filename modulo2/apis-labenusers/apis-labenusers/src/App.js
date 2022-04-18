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
    inputName: "",
    inputEmail: "",
    tela: 1
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
            goToListUsers={this.goToListUsers}
          />
        </div>
      )

    case 2:
      return (
        <div>
          <ListUsers 
            getAllUsers={this.getAllUsers}
            headers={headers}
            users={this.state.usuarios}
            goToPostUsers={this.goToPostUsers}
            goToUser={this.goToUser}
          />
        </div>
      )
    
    default:
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
    }
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
      this.setState({inputName: "", inputEmail: ""});
    })
    .catch(error => {
      alert(error.response.data.message);
    });
  }

  onChangeName = (event) => this.setState({inputName: event.target.value});
  onChangeEmail = (event) => this.setState({inputEmail: event.target.value});

  goToPostUsers = () => this.setState({tela: 1});
  goToListUsers = () => this.setState({tela: 2});

  render () {
    return (
      <div>

        {this.renderizaTela()}

      </div>
    );
  }
}

export default App;