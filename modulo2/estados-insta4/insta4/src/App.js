import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state = {
    post: [ 
      { nomeUsuario: 'Paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
      { nomeUsuario: 'João Carlos', fotoUsuario: 'https://picsum.photos/50/51', fotoPost: 'https://picsum.photos/200/151' },
      { nomeUsuario: 'Marta', fotoUsuario: 'https://picsum.photos/50/52', fotoPost: 'https://picsum.photos/200/152' }
    ],
    
    valorPost: {
      nomeUsuario: '',
  
      fotoUsuario: '',
  
      fotoPost: ''
    }
  }

  adicionaPost = () => {
    const novoPost = this.state.valorPost;

    const addPost = [novoPost, ...this.state.post];

    this.setState({ post: addPost });

    this.setState({ valorPost: {
      nomeUsuario: '',

      fotoUsuario: '',

      fotoPost: ''
    }});
  };  

  onChangeInputNome = (event) => {this.setState({valorPost: {nomeUsuario: event.target.value}});}
  onChangeInputFoto = (event) => {this.setState({valorPost: {fotoUsuario: event.target.value}});}
  onChangeInputPost = (event) => {this.setState({valorPost: {fotoPost: event.target.value}});}

  render() {
    const listComponentPost = this.state.post.map((obj) => {
      return (
        <Post nomeUsuario={obj.nomeUsuario}
              fotoUsuario={obj.fotoUsuario} 
              fotoPost={obj.fotoPost} 
        />
      )
    });

    return (
      <MainContainer>
        
        <input
            value={this.state.valorPost.nomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
        <input
            value={this.state.valorPost.fotoUsuario}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto de Perfil"}
          />
        <input
          value={this.state.valorPost.fotoPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}
        />
        
        <button onClick={this.adicionaPost}>Adicionar</button>

        <div>{listComponentPost}</div>

      </MainContainer>
    );
  }
}

export default App;
