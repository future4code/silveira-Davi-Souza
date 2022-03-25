import React from 'react'
import styled from 'styled-components'
import Msg from './componentes/Msg/Msg.js'

const Div_master = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: antiquewhite;
  height: 100vh;
`

const Box_div = styled.div `
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 35vw;
  height: 98vh;
  border: 1px solid black;
`
const Box_input = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`


class App extends React.Component {
  
  state = {
    campo_mensagem: [],

    valorInputUsuario: '', 
    valorInputMensagem: ''
  }

  addMsg = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    this.setState({ campo_mensagem: [...this.state.campo_mensagem, novaMensagem] });

    this.state.valorInputUsuario = '';
    this.state.valorInputMensagem = '';
  }

  onChangeInputUsuario = (event) => this.setState({valorInputUsuario: event.target.value});
  onChangeInputMensagem = (event) => this.setState({valorInputMensagem: event.target.value});

  render () {

    const listaMensagem = this.state.campo_mensagem.map((obj) => {
      return (
          <Msg usuario={obj.usuario} texto = {obj.mensagem} />
      )
    });

    return (
      <Div_master>

        <Box_div>

          {listaMensagem}

          <Box_input>

            <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            type="text" 
            placeholder='Usuário' 
            />

            <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem} 
            type="text" 
            placeholder='Mensagem...' 
            />

            <button onClick={this.addMsg}>Enviar</button>

          </Box_input>

        </Box_div>

      </Div_master>
  );
  }
}

export default App;
